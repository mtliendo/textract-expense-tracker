/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Expense = {
  __typename: "Expense",
  id: string,
  date: string,
  subtotal: string,
  merchant: string,
  amount: string,
  tax: string,
  category?: string | null,
  receiptS3Key: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type CreateExpenseInput = {
  id?: string | null,
  date: string,
  subtotal: string,
  merchant: string,
  amount: string,
  tax: string,
  category?: string | null,
  receiptS3Key: string,
};

export type ModelExpenseConditionInput = {
  date?: ModelStringInput | null,
  subtotal?: ModelStringInput | null,
  merchant?: ModelStringInput | null,
  amount?: ModelStringInput | null,
  tax?: ModelStringInput | null,
  category?: ModelStringInput | null,
  receiptS3Key?: ModelStringInput | null,
  and?: Array< ModelExpenseConditionInput | null > | null,
  or?: Array< ModelExpenseConditionInput | null > | null,
  not?: ModelExpenseConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateExpenseInput = {
  id: string,
  date?: string | null,
  subtotal?: string | null,
  merchant?: string | null,
  amount?: string | null,
  tax?: string | null,
  category?: string | null,
  receiptS3Key?: string | null,
};

export type DeleteExpenseInput = {
  id: string,
};

export type ModelExpenseFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  subtotal?: ModelStringInput | null,
  merchant?: ModelStringInput | null,
  amount?: ModelStringInput | null,
  tax?: ModelStringInput | null,
  category?: ModelStringInput | null,
  receiptS3Key?: ModelStringInput | null,
  and?: Array< ModelExpenseFilterInput | null > | null,
  or?: Array< ModelExpenseFilterInput | null > | null,
  not?: ModelExpenseFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelExpenseConnection = {
  __typename: "ModelExpenseConnection",
  items:  Array<Expense | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionExpenseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  subtotal?: ModelSubscriptionStringInput | null,
  merchant?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionStringInput | null,
  tax?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  receiptS3Key?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExpenseFilterInput | null > | null,
  or?: Array< ModelSubscriptionExpenseFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateTextractExpenseMutationVariables = {
  receiptS3Key: string,
};

export type CreateTextractExpenseMutation = {
  createTextractExpense:  {
    __typename: "Expense",
    id: string,
    date: string,
    subtotal: string,
    merchant: string,
    amount: string,
    tax: string,
    category?: string | null,
    receiptS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  },
};

export type CreateExpenseMutationVariables = {
  input: CreateExpenseInput,
  condition?: ModelExpenseConditionInput | null,
};

export type CreateExpenseMutation = {
  createExpense?:  {
    __typename: "Expense",
    id: string,
    date: string,
    subtotal: string,
    merchant: string,
    amount: string,
    tax: string,
    category?: string | null,
    receiptS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateExpenseMutationVariables = {
  input: UpdateExpenseInput,
  condition?: ModelExpenseConditionInput | null,
};

export type UpdateExpenseMutation = {
  updateExpense?:  {
    __typename: "Expense",
    id: string,
    date: string,
    subtotal: string,
    merchant: string,
    amount: string,
    tax: string,
    category?: string | null,
    receiptS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteExpenseMutationVariables = {
  input: DeleteExpenseInput,
  condition?: ModelExpenseConditionInput | null,
};

export type DeleteExpenseMutation = {
  deleteExpense?:  {
    __typename: "Expense",
    id: string,
    date: string,
    subtotal: string,
    merchant: string,
    amount: string,
    tax: string,
    category?: string | null,
    receiptS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetExpenseQueryVariables = {
  id: string,
};

export type GetExpenseQuery = {
  getExpense?:  {
    __typename: "Expense",
    id: string,
    date: string,
    subtotal: string,
    merchant: string,
    amount: string,
    tax: string,
    category?: string | null,
    receiptS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListExpensesQueryVariables = {
  filter?: ModelExpenseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExpensesQuery = {
  listExpenses?:  {
    __typename: "ModelExpenseConnection",
    items:  Array< {
      __typename: "Expense",
      id: string,
      date: string,
      subtotal: string,
      merchant: string,
      amount: string,
      tax: string,
      category?: string | null,
      receiptS3Key: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTextractExpenseSubscriptionVariables = {
  owner: string,
};

export type OnCreateTextractExpenseSubscription = {
  onCreateTextractExpense?:  {
    __typename: "Expense",
    id: string,
    date: string,
    subtotal: string,
    merchant: string,
    amount: string,
    tax: string,
    category?: string | null,
    receiptS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseFilterInput | null,
  owner?: string | null,
};

export type OnCreateExpenseSubscription = {
  onCreateExpense?:  {
    __typename: "Expense",
    id: string,
    date: string,
    subtotal: string,
    merchant: string,
    amount: string,
    tax: string,
    category?: string | null,
    receiptS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateExpenseSubscription = {
  onUpdateExpense?:  {
    __typename: "Expense",
    id: string,
    date: string,
    subtotal: string,
    merchant: string,
    amount: string,
    tax: string,
    category?: string | null,
    receiptS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteExpenseSubscriptionVariables = {
  filter?: ModelSubscriptionExpenseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteExpenseSubscription = {
  onDeleteExpense?:  {
    __typename: "Expense",
    id: string,
    date: string,
    subtotal: string,
    merchant: string,
    amount: string,
    tax: string,
    category?: string | null,
    receiptS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
