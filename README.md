# CI/CD Pipeline Documentation

This project uses GitHub Actions for continuous integration and deployment of Shopify themes. The pipeline includes validation, testing, and deployment to different environments.

## Workflow Overview

The CI/CD pipeline is triggered on:
- Push to `dev`, `stage`, `main`, or `master` branches
- Pull requests targeting `dev`, `stage`, `main`, or `master` branches

## Pipeline Stages

### 1. Validation
- **Job Name**: Validate Theme
- **Purpose**: Validates the theme structure and content
- **Status**: Currently configured to skip validation (for development purposes)

### 2. Testing
- **Job Name**: Run Tests
- **Purpose**: Verifies repository structure and runs any configured tests
- **Actions**:
  - Checks repository content
  - Validates file structure

### 3. Deployment

#### Development Environment
- **Trigger**: Push to `dev` branch
- **Job Name**: Deploy to Development
- **Dependencies**: Test stage must pass
- **Actions**:
  - Sets up Node.js 18
  - Installs Shopify CLI and Theme Kit
  - Deploys to development theme (ID: `152975179991`)
  - Uses environment-specific configuration

#### Staging Environment
- **Trigger**: Push to `stage` branch
- **Job Name**: Deploy to Staging
- **Dependencies**: Test stage must pass
- **Actions**:
  - Sets up Node.js 18
  - Installs Shopify CLI and Theme Kit
  - Deploys to staging theme (ID: `152976457943`)

#### Production Environment
- **Trigger**: Push to `main` or `master` branch
- **Job Name**: Deploy to Production
- **Dependencies**: Test stage must pass
- **Actions**:
  - Sets up Node.js 18
  - Installs Shopify CLI and Theme Kit
  - Deploys to production theme (ID: `152685609175`)

## Environment Variables

The following environment variables are used in the workflow:

- `SHOPIFY_STORE_URL`: radianz-store.myshopify.com
- `THEME_DEV_ID`: Development theme ID
- `THEME_STAGE_ID`: Staging theme ID
- `THEME_PROD_ID`: Production theme ID
- `SHOPIFY_CLI_TOKEN`: Secret token for Shopify CLI authentication

## Required Secrets

The following secrets must be configured in your GitHub repository settings:

- `SHOPIFY_CLI_TOKEN`: Authentication token for Shopify CLI

## Best Practices

1. Always create a pull request for changes to be reviewed before merging to main branches
2. Test changes in the development environment before promoting to staging or production
3. Keep the `dev` branch stable for testing
4. Use feature branches for new development

## Troubleshooting

- If deployment fails, check the GitHub Actions logs for detailed error messages
- Ensure all required secrets are properly configured in GitHub repository settings
- Verify that the theme IDs in the workflow file match your Shopify store's theme IDs