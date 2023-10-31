/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getExpense = /* GraphQL */ `query GetExpense($id: ID!) {
  getExpense(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExpenseQueryVariables,
  APITypes.GetExpenseQuery
>;
export const listExpenses = /* GraphQL */ `query ListExpenses(
  $filter: ModelExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExpensesQueryVariables,
  APITypes.ListExpensesQuery
>;
