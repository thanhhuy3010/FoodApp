export interface ITicket {
  TotalCount: number,
  Result: IResult[],

}

export default interface IResult {
  HasOrganization: boolean | null,
  Id: number | null,
  ExternalIdentifier: number | null,
  Name: string | null,
  Description: string | null,
  FareCategory: number | null,
  ProductGroup: any ,
  Type: number | null,
  Price: number,
  ValuePassCredit: any | null,
  SubsidizedPayment: any | null,
  ValidityDescription: string | null,
  IsValidWhenSelling: boolean | null,
  ValidFrom: string |null,
  ValidTo: string | null,
  NumberOfTrips: any |null,
  LoadingLimit: any | null,
  IsProratable: boolean,
  GroupSize: any | null,
  OperatorId: number | null,
  ValidityDates: {                
    ValidFrom: string | null,
    ValidTo: string,
    IsDefaultFrom: boolean
}[] | null,
  IsOfflineAvailable: boolean | null
}