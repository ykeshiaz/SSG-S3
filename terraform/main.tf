# Tell terraform how to startup and what providers (resource holders) we'll need
terraform {
  cloud {
    organization = "KESHORG"

    workspaces {
      name = "kesh-website-infra"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.74.0"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-1"
  profile = "default"
}