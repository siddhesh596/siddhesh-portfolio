# AWS S3 Portfolio Deployment using Terraform and GitHub Actions

A DevOps project that demonstrates hosting a static portfolio website on AWS S3 using Terraform for Infrastructure as Code (IaC) and GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).

---

## Project Overview

This project provisions AWS infrastructure using Terraform and automatically deploys website updates to an Amazon S3 bucket whenever changes are pushed to the GitHub repository.

### Objectives

- Provision AWS infrastructure using Terraform
- Host a static website on Amazon S3
- Automate deployments using GitHub Actions
- Secure AWS credentials using GitHub Secrets
- Implement Infrastructure as Code (IaC)

---

## Architecture

```text
Developer
    |
    | Git Push
    |
    V
GitHub Repository
    |
    V
GitHub Actions
    |
    +-----------------------------+
    |                             |
    | Configure AWS Credentials   |
    |                             |
    +-------------+---------------+
                  |
                  V
         Amazon S3 Bucket
                  |
                  V
      Static Portfolio Website
```

---

## Project Structure

```text
siddhesh-portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
│
├── terraform/
│   ├── versions.tf
│   ├── provider.tf
│   ├── variables.tf
│   ├── main.tf
│   ├── outputs.tf
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## Technologies Used

- AWS S3
- Terraform
- GitHub Actions
- Git
- AWS CLI
- HTML
- CSS
- JavaScript

---

## AWS Services Used

- Amazon S3
- AWS Identity and Access Management (IAM)

---

## Prerequisites

Before running this project, install the following:

- Git
- Terraform
- AWS CLI
- Visual Studio Code
- AWS Account

---

## Terraform Commands

Initialize Terraform

```bash
terraform init
```

Validate Configuration

```bash
terraform validate
```

Format Configuration

```bash
terraform fmt
```

Preview Infrastructure

```bash
terraform plan
```

Create Infrastructure

```bash
terraform apply
```

Destroy Infrastructure

```bash
terraform destroy
```

---

## GitHub Secrets

Configure the following repository secrets:

| Secret Name | Description |
|-------------|-------------|
| AWS_ACCESS_KEY_ID | AWS Access Key ID |
| AWS_SECRET_ACCESS_KEY | AWS Secret Access Key |
| AWS_REGION | AWS Region |
| S3_BUCKET_NAME | Amazon S3 Bucket Name |

---

## CI/CD Workflow

Whenever code is pushed to the **main** branch:

1. GitHub Actions workflow is triggered.
2. Repository source code is checked out.
3. AWS credentials are configured.
4. Website files are synchronized with the Amazon S3 bucket.
5. Updated website becomes available automatically.

---

## Deployment Workflow

```text
Developer
    |
    | Git Push
    |
    V
GitHub Repository
    |
    V
GitHub Actions
    |
    V
Configure AWS Credentials
    |
    V
Amazon S3 Bucket
    |
    V
Portfolio Website
```

---

## Local Setup

Clone the repository

```bash
git clone https://github.com/siddhesh596/siddhesh-portfolio.git
```

Navigate to the project directory

```bash
cd siddhesh-portfolio
```

Initialize Terraform

```bash
cd terraform
terraform init
```

Deploy Infrastructure

```bash
terraform apply
```

---

## Features

- Infrastructure as Code using Terraform
- Static Website Hosting on Amazon S3
- Automated Deployment using GitHub Actions
- Version Control with Git and GitHub
- Secure Authentication using GitHub Secrets
- Continuous Integration and Continuous Deployment

---

## Skills Demonstrated

- Amazon Web Services (AWS)
- Amazon S3
- Infrastructure as Code (Terraform)
- GitHub Actions
- CI/CD
- Git
- AWS CLI
- Static Website Deployment

---

## Future Enhancements

- Amazon CloudFront
- Route 53 Custom Domain
- HTTPS using AWS Certificate Manager (ACM)
- Remote Terraform State using Amazon S3 and DynamoDB
- Separate Development and Production Environments
- Terraform Workflow in GitHub Actions
- Monitoring with Amazon CloudWatch
- Web Application Firewall (AWS WAF)

---

## Author

**Siddhesh Pawar**

GitHub: https://github.com/siddhesh596

Website link: http://siddhesh-pawar-portfolio-2026.s3-website.ap-south-1.amazonaws.com

LinkedIn: Add your LinkedIn profile URL here

---

## License

This project is licensed under the MIT License.