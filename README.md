# AppSync Expense Tracker

## Introduction

AppSync Expense Tracker is a demo application that leverages a suite of AWS services for real-time, automated expense reporting. This application integrates AWS AppSync, Amazon Cognito, Amazon Textract, DynamoDB, and S3 to create a seamless yet simple user experience.

### Key Features:

- **Real-time Automated Expense Reporting**: Utilizes AWS AppSync for instant data synchronization.
- **Secure Authentication**: Integrates Amazon Cognito for user authentication and management.
- **Intelligent Document Processing**: Employs Amazon Textract for accurate extraction of expense details from images.
- **Scalable Database Storage**: Uses DynamoDB for storing expense data with high availability.
- **Reliable File Storage**: Leverages S3 for secure storage of expense images.

## Frontend

The frontend of AppSync Expense Tracker is built using React and NextJS, providing a robust and scalable web application. AWS Amplify UI libraries are integrated to offer a rich UI experience and JavaScript client-side helpers for seamless AWS interactions.

### Frontend Features:

- **React and NextJS**: Modern JavaScript frameworks for building interactive UIs.
- **AWS Amplify UI Libraries**: Pre-built UI components and workflows for AWS services.

## Backend

The backend infrastructure is created using the AWS Cloud Development Kit (CDK), ensuring a programmatically defined, version-controlled, and reliable AWS environment.

### Backend Features:

- **AWS CDK**: Infrastructure as Code for defining cloud resources.
- **Integration with AWS Services**: Seamless connectivity with AWS AppSync, Cognito, Textract, DynamoDB, and S3.

## Functionality

- **Expense Image Upload**: Users can upload images of their receipts or bills.
- **Data Extraction and Storage**:
  - **Amazon Textract**: Extracts details from the uploaded images.
  - **DynamoDB**: Stores the extracted expense data.
  - **S3 Bucket**: Stores the images, accessed via presigned URLs for security.

## Sample Application

This application is a sample implementation and serves as a blueprint for building real-time, automated expense tracking solutions. The contents of the S3 bucket are accessible via presigned URLs, ensuring data security and integrity.

## Getting Started

To get started with AppSync Expense Tracker, clone the repository and follow the setup instructions provided in the documentation.
