export type Organization = {
  _id: string,
  name: string
}

export type CreateOrganizationPayload = {
  name: string,
  userId: string, // TOOD: remove
}