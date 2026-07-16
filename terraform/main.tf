####################################
# Create S3 Bucket
####################################

resource "aws_s3_bucket" "portfolio" {
  bucket = var.bucket_name
}

####################################
# Disable Block Public Access
####################################

resource "aws_s3_bucket_public_access_block" "portfolio" {

  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

####################################
# Bucket Ownership
####################################

resource "aws_s3_bucket_ownership_controls" "portfolio" {

  bucket = aws_s3_bucket.portfolio.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

####################################
# ACL
####################################

resource "aws_s3_bucket_acl" "portfolio" {

  depends_on = [
    aws_s3_bucket_ownership_controls.portfolio,
    aws_s3_bucket_public_access_block.portfolio
  ]

  bucket = aws_s3_bucket.portfolio.id

  acl = "public-read"
}

####################################
# Static Website Hosting
####################################

resource "aws_s3_bucket_website_configuration" "portfolio" {

  bucket = aws_s3_bucket.portfolio.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

####################################
# Bucket Policy
####################################

resource "aws_s3_bucket_policy" "public" {

  bucket = aws_s3_bucket.portfolio.id

  policy = jsonencode({

    Version = "2012-10-17"

    Statement = [

      {

        Effect = "Allow"

        Principal = "*"

        Action = "s3:GetObject"

        Resource = "${aws_s3_bucket.portfolio.arn}/*"

      }

    ]

  })

  depends_on = [
    aws_s3_bucket_public_access_block.portfolio
  ]
}