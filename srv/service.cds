using { db as my  } from '../db/schema';

service Catelog {
    entity ServiceCatalogue as projection on my.ServiceCatalogue;
    entity Profile as projection on my.Profile;
    entity Contract_TypeSet as projection on my.ZGMS_VALUE_HELP_SRV.Contract_TypeSet;
    entity Storage_LocSet as projection on my.ZGMS_VALUE_HELP_SRV.Storage_LocSet;
    entity TransportSet as projection on my.ZGMS_VALUE_HELP_SRV.TransportSet;
     entity UOMSet as projection on my.ZGMS_VALUE_HELP_SRV.UOMSet;
    entity Sales_OrgSet as projection on my.ZGMS_VALUE_HELP_SRV.Sales_OrgSet;
   entity Ship_To_PartySet as projection on my.ZGMS_VALUE_HELP_SRV.Ship_To_PartySet;
   entity Sold_To_PartySet as projection on my.ZGMS_VALUE_HELP_SRV.Sold_To_PartySet;
    entity MaterialSet as projection on my.ZGMS_VALUE_HELP_SRV.MaterialSet;
    entity PlantSet as projection on my.ZGMS_VALUE_HELP_SRV.PlantSet;
    entity Sales_ContractSet as projection on my.ZGMS_VALUE_HELP_SRV.Sales_ContractSet;
    entity LocationPointSet as projection on my.ZGMS_VALUE_HELP_SRV.LocationPointSet;
    entity DivisionSet as projection on my.ZGMS_VALUE_HELP_SRV.DivisionSet;
    entity Dist_ChannelSet as projection on my.ZGMS_VALUE_HELP_SRV.Dist_ChannelSet;
    entity LocationSet as projection on my.ZGMS_VALUE_HELP_SRV.LocationSet ;
    entity A_SalesContract as projection on my.ZAPI_SALES_CONTRACT_SRV.A_SalesContract
    entity A_SalesContractItem as projection on my. ZAPI_SALES_CONTRACT_SRV.A_SalesContractItem
    entity A_SalesContractItemPartner as projection on my. ZAPI_SALES_CONTRACT_SRV.A_SalesContractItemPartner
    entity A_SalesContractItemPrcgElmnt as projection on my. ZAPI_SALES_CONTRACT_SRV.A_SalesContractItemPrcgElmnt
    entity A_SalesContractPartner as projection on my. ZAPI_SALES_CONTRACT_SRV.A_SalesContractPartner
    entity A_SalesContractPrcgElmnt as projection on my. ZAPI_SALES_CONTRACT_SRV.A_SalesContractPrcgElmnt


  













}