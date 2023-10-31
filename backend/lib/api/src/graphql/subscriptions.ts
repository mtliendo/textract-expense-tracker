/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTextractExpense = /* GraphQL */ `subscription OnCreateTextractExpense($owner: ID!) {
  onCreateTextractExpense(owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTextractExpenseSubscriptionVariables,
  APITypes.OnCreateTextractExpenseSubscription
>;
export const onCreateExpense = /* GraphQL */ `subscription OnCreateExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onCreateExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExpenseSubscriptionVariables,
  APITypes.OnCreateExpenseSubscription
>;
export const onUpdateExpense = /* GraphQL */ `subscription OnUpdateExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onUpdateExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExpenseSubscriptionVariables,
  APITypes.OnUpdateExpenseSubscription
>;
export const onDeleteExpense = /* GraphQL */ `subscription OnDeleteExpense(
  $filter: ModelSubscriptionExpenseFilterInput
  $owner: String
) {
  onDeleteExpense(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExpenseSubscriptionVariables,
  APITypes.OnDeleteExpenseSubscription
>;
