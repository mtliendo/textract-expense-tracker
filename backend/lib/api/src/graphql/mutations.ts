/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTextractExpense = /* GraphQL */ `mutation CreateTextractExpense($receiptS3Key: String!) {
  createTextractExpense(receiptS3Key: $receiptS3Key) {
    id
    date
    subtotal
    merchant
    amount
    tax
    category
    receiptS3Key
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTextractExpenseMutationVariables,
  APITypes.CreateTextractExpenseMutation
>;
export const createExpense = /* GraphQL */ `mutation CreateExpense(
  $input: CreateExpenseInput!
  $condition: ModelExpenseConditionInput
) {
  createExpense(input: $input, condition: $condition) {
    id
    date
    subtotal
    merchant
    amount
    tax
    category
    receiptS3Key
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExpenseMutationVariables,
  APITypes.CreateExpenseMutation
>;
export const updateExpense = /* GraphQL */ `mutation UpdateExpense(
  $input: UpdateExpenseInput!
  $condition: ModelExpenseConditionInput
) {
  updateExpense(input: $input, condition: $condition) {
    id
    date
    subtotal
    merchant
    amount
    tax
    category
    receiptS3Key
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExpenseMutationVariables,
  APITypes.UpdateExpenseMutation
>;
export const deleteExpense = /* GraphQL */ `mutation DeleteExpense(
  $input: DeleteExpenseInput!
  $condition: ModelExpenseConditionInput
) {
  deleteExpense(input: $input, condition: $condition) {
    id
    date
    subtotal
    merchant
    amount
    tax
    category
    receiptS3Key
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExpenseMutationVariables,
  APITypes.DeleteExpenseMutation
>;
