sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/Filter",

        "sap/ui/model/FilterOperator",
        "sap/m/MessageBox"
    ],
    function(BaseController, JSONModel, Filter,FilterOperator,MessageBox) {
      "use strict";
      return BaseController.extend("gmsfiori.controller.CGChome", {
        // _oTankInfoDialog34: null,
        // _oTankInfomate: null,
        // _oTankInfouom1: null,
        // _oTankInfoDialog1: null,
        // _oTankInfoDialogdiv: null,
        // _oTankInfoDialogsaor: null,


        onInit: function() {
          let nomDataModel = new JSONModel()
                let arrNom = {
                  "SalesContract": "",
                  "SalesContractType": "",
                  "SalesOrganization": "",
                  "DistributionChannel": "",
                  "OrganizationDivision": "",
                  // "SalesGroup": "",
                  // "SalesOffice": "",
                  // "SalesDistrict": "",
                  "SoldToParty": "",
                  // "PurchaseOrderByCustomer": "",
                  // "CustomerPurchaseOrderType": "",
                  // "CustomerPurchaseOrderDate": null,
                  // "SalesContractDate": null,
                  // "TransactionCurrency": "",
                  // "SDDocumentReason": "",
                  // "PricingDate": null,
                  // "IncotermsClassification": "",
                  // "IncotermsTransferLocation": "",
                  // "IncotermsLocation1": "",
                  // "IncotermsLocation2": "",
                  // "IncotermsVersion": "",
                  // "CustomerPaymentTerms": "",
                  // "PaymentMethod": "",

                  // "SalesContractValidityStartDate": "",
                  // "SalesContractValidityEndDate": "",

                  // "SalesContractValidityPerdUnit": "",
                  // "SalesContractValidityPerdCat": "",
                  // "SalesContractSignedDate": null,
                  // "NmbrOfSalesContractValdtyPerd": "",
                  // "SalesContractFollowUpAction": "",
                  // "SlsContractFollowUpActionDate": null,
                  // "ReferenceSDDocument": "",
                  "to_Item": [
                  {
                      "SalesContractItem": "",
                      // "HigherLevelItem": "",
                      // "SalesContractItemCategory": "",
                      // "SalesContractItemText": "",
                      // "PurchaseOrderByCustomer": "",
                      "Material": "",
                      // "MaterialByCustomer": "",
                      // "PricingDate": null,
                      "RequestedQuantity": "",
                      "RequestedQuantityUnit": "",
                      "OutlineAgreementTargetAmount": "",
                      // "MaterialGroup": "",
                      // "MaterialPricingGroup": "",
                      "ProductionPlant": "",
                      // "StorageLocation": "",
                      // "ShippingPoint": "",
                      // "IncotermsClassification": "",
                      // "IncotermsTransferLocation": "",
                      // "IncotermsLocation1": "",
                      // "IncotermsLocation2": "",
                      // "CustomerPaymentTerms": "",
                      // "SalesDocumentRjcnReason": "",
                      // "ItemBillingBlockReason": "",
                      // "WBSElement": "",
                      // "ProfitCenter": "",
                      // "ReferenceSDDocument": "",
                      // "ReferenceSDDocumentItem": "",
                      // "SalesContractValidityStartDate": null,
                      // "SalesContractValidityEndDate": null,
                      // "NmbrOfSalesContractValdtyPerd": "",
                      // "SalesContractValidityPerdUnit": "",
                      // "SalesContractValidityPerdCat": "",
                      // "SalesContractSignedDate": null,
                      // "SalesContractFollowUpAction": "",
                      // "SlsContractFollowUpActionDate": ""

                  }
              ]
                  
              }
                nomDataModel.setData(arrNom)
                this.getView().setModel(nomDataModel, 'sharedModel')
      //     
        },
        onSoldtoparty() {
          // create dialog lazilyz
          var oView = this.getView();
          if (!this._oTankInfoDialog34) {
            this._oTankInfoDialog34 = sap.ui.xmlfragment(oView.getId(), "gmsfiori.view.soldtoparty", this);
            oView.addDependent(this._oTankInfoDialog34);
          }
          // var oTankModel = new sap.ui.model.json.JSONModel();  
          // this._oTankInfoDialog.setModel(oTankModel);
          this._oTankInfoDialog34.open();    
      },
      onValueHelpSearch: function (oEvent) {
        var sValue = oEvent.getParameter("value");

        var oFilter = new Filter(
          "Kunnr",
          FilterOperator.Contains,
          sValue
        );

        oEvent.getSource().getBinding("items").filter([oFilter]);
      },
      
      onValueHelpClose: function(oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");
 
        oEvent.getSource().getBinding("items").filter([]);
   
        if (!oSelectedItem) {
          return;
        }
   
        this.byId("Shiptp_id").setValue(oSelectedItem.getTitle());
    },
      onValueHelpClose1: function(oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");
 
        oEvent.getSource().getBinding("items").filter([]);
   
        if (!oSelectedItem) {
          return;
        }
   
        this.byId("Soldtp_id").setValue(oSelectedItem.getTitle());
    },
      onShiptpoo() {
        // create dialog lazily
        // create dialog lazilyz
        var oView = this.getView();
        if (!this._oTankInfoDialog1) {
          this._oTankInfoDialog1 = sap.ui.xmlfragment(oView.getId(), "gmsfiori.view.shiptoparty", this);
          oView.addDependent(this._oTankInfoDialog1);
        }
        // var oTankModel = new sap.ui.model.json.JSONModel();  
        // this._oTankInfoDialog.setModel(oTankModel);
        this._oTankInfoDialog1.open();
       
      },
      onCloseDialog : function(){
        if (this._oTankInfoDialog1) {
          this._oTankInfoDialog1.close();
        }
    },
    onSubmitgms: function () {
      let oData = this.getView().getModel('sharedModel').getData()
      let nomDataModel = this.getOwnerComponent().getModel()
      let oBindList = nomDataModel.bindList("/A_SalesContract");
      // debugger
      // oBindList.create(oData);
      oBindList.create(oData, {
          success: function (msg) {
              MessageBox.success('Successfully.')
          },
          error: function (msg) {
              MessageBox.success('Error.')
          },
      })
  },

    // onValueHelpClose: function (oEvent) {
    //     var oSelectedItem = oEvent.getParameter("selectedItem");
    
    //     oEvent.getSource().getBinding("items").filter([]);
    
    //     if (!oSelectedItem) {
    //         return;
    //     }
    
    //     this.byId("Shiptp_id").setValue(oSelectedItem.getTitle());
    
    //     // Assuming you have a shared model
    //     var oModel = new sap.ui.model.json.JSONModel();
    //     var oDataToShare = {
    //         shipToParty: oSelectedItem.getTitle(),
    //         // Add other properties if needed
    //     };
    //     oModel.setData(oDataToShare);
    
    //     // Set the model to the target fragment/controller
    //     var oTargetController = this.getOwnerComponent().getAggregation("rootControl").getController();
    //     oTargetController.getView().setModel(oModel, "sharedModel");
    // },

        // onSoldtp: function (oEvent) {
        //   let oTable = new sap.m.Table({
        //     fixedLayout: false,
        //     mode: sap.m.ListMode.SingleSelectLeft,
        //     selectionChange: this._onSelectionChangeMaterial1.bind(this),
        //   })
        //   oTable.bindAggregation('items', {
        //     path: '/Sold_To_PartySet',
        //     template: new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Kunnr}' })
        //       ],
        //     }),
        //   })
        //   oTable.addColumn(
        //     new sap.m.Column({
        //       header: new sap.m.Label({ text: 'Sold To Party' }),
        //     }),
        //   )
        //   oTable.addItem(
        //     new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Kunnr}' })
        //       ],
        //     }),
        //   )
        //   this._oValueHelpDialog = new sap.m.Dialog({
        //     title: 'Sold To Party',
        //   })
        //   this.getView().addDependent(this._oValueHelpDialog)
        //   this._oValueHelpDialog.addContent(oTable)
        //   this._oValueHelpDialog.open()
        // },
        // _onSelectionChangeMaterial1: function (oEvent) {
        //   this.byId('Soldtp_id').setValue(
        //     oEvent.getParameter('listItem').getBindingContext().getObject().Kunnr,
        //   )
        //   this._oValueHelpDialog.close()
        // },

        // onShiptp: function (oEvent) {
        //   let oTable = new sap.m.Table({
        //     fixedLayout: false,
        //     mode: sap.m.ListMode.SingleSelectLeft,
        //     selectionChange: this._onSelectionChangeMaterial2.bind(this),
        //   })
        //   oTable.bindAggregation('items', {
        //     path: '/Ship_To_PartySet',
        //     template: new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Kunnr}' })
        //       ],
        //     }),
        //   })
        //   oTable.addColumn(
        //     new sap.m.Column({
        //       header: new sap.m.Label({ text: 'Ship To Party' }),
        //     }),
        //   )
        //   oTable.addItem(
        //     new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Kunnr}' })
        //       ],
        //     }),
        //   )
        //   this._oValueHelpDialog = new sap.m.Dialog({
        //     title: 'Ship To Party',
        //   })
        //   this.getView().addDependent(this._oValueHelpDialog)
        //   this._oValueHelpDialog.addContent(oTable)
        //   this._oValueHelpDialog.open()
        // },
        // _onSelectionChangeMaterial2: function (oEvent) {
        //   this.byId('Shiptp_id').setValue(
        //     oEvent.getParameter('listItem').getBindingContext().getObject().Kunnr,
        //   )
        //   this._oValueHelpDialog.close()
        // },
        
        
        // // onSalesorg: function (oEvent) {
        // //   let oTable = new sap.m.Table({
        // //     fixedLayout: false,
        // //     mode: sap.m.ListMode.SingleSelectLeft,
        // //     selectionChange: this._onSelectionChangeMaterial3.bind(this),
        // //   })
        // //   oTable.bindAggregation('items', {
        // //     path: '/Sales_OrgSet',
        // //     template: new sap.m.ColumnListItem({
        // //       cells: [
        // //         new sap.m.Text({ text: '{Vkorg}' })
        // //       ],
        // //     }),
        // //   })
        // //   oTable.addColumn(
        // //     new sap.m.Column({
        // //       header: new sap.m.Label({ text: 'Sales Organisation' }),
        // //     }),
        // //   )
        // //   oTable.addItem(
        // //     new sap.m.ColumnListItem({
        // //       cells: [
        // //         new sap.m.Text({ text: '{Vkorg}' })
        // //       ],
        // //     }),
        // //   )
        // //   this._oValueHelpDialog = new sap.m.Dialog({
        // //     title: 'Sales Organisation',
        // //   })
        // //   this.getView().addDependent(this._oValueHelpDialog)
        // //   this._oValueHelpDialog.addContent(oTable)
        // //   this._oValueHelpDialog.open()
        // // },
        // // _onSelectionChangeMaterial3: function (oEvent) {
        // //   this.byId('SalesOrg_id').setValue(
        // //     oEvent.getParameter('listItem').getBindingContext().getObject().Vkorg,
        // //   )
        // //   this._oValueHelpDialog.close()
        // // },

        // onSalesorg: function(oEvent) {
        //   let SOModel = this.getOwnerComponent().getModel("sorg");
        //   let oSDheaderModel = this.getView().getModel("sdheadermodel");
        //   this.getView().setModel(oSDheaderModel, "sdheadermodel");
        //   let aCols = {
        //     cols: [
        //       {
        //         label: "Sales Org",
        //         template: "Vkorg",
        //       }
              
        //     ],
        //   };
        //   let oColSOModel = new JSONModel(aCols);
        //   this._oSOHelpDialog = sap.ui.xmlfragment(
        //     "gmsfiori.view.stp",
        //     this
        //   );
        //   this.getView().addDependent(this._oSOHelpDialog);
   
        //   this._oSOHelpDialog.getTableAsync().then(
        //     function (oTable) {
        //       oTable.setModel(SOModel);
        //       oTable.setModel(oColSOModel, "columns");
   
        //       if (oTable.bindRows) {
        //         oTable.bindAggregation("rows", "/Sales_OrgSet");
        //       }
   
        //       if (oTable.bindItems) {
        //         oTable.bindAggregation("items", "/Sales_OrgSet", function () {
        //           return new ColumnListItem({
        //             cells: aCols.map(function (column) {
        //               return new Label({
        //                 text: "{" + column.template + "}",
        //               });
        //             }),
        //           });
        //         });
        //       }
        //       this._oSOHelpDialog.update();
        //     }.bind(this)
        //   );
        //   this._oSOHelpDialog.open();
        // },
   
        // onSOHelpOkPress: function (oEvent) {
        //   let aTokens = oEvent.getParameter("tokens");
        //   console.log(aTokens);
        //   this.getView()
        //     .getModel("sdheadermodel")
        //     .setProperty("/SalesOrg", aTokens[0].getKey());
   
        //   this._oSOHelpDialog.close();
          
        // },
        // onSOHelpCancelPress: function (oEvent) {
        //   this._oSOHelpDialog.close();
        //   oSDheaderModel.refresh();
        // },
        // onDivison: function (oEvent) {
        //   let oTable = new sap.m.Table({
        //     fixedLayout: false,
        //     mode: sap.m.ListMode.SingleSelectLeft,
        //     selectionChange: this._onSelectionChangeMaterial4.bind(this),
        //   })
        //   oTable.bindAggregation('items', {
        //     path: '/DivisionSet',
        //     template: new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Spart}' })
        //       ],
        //     }),
        //   })
        //   oTable.addColumn(
        //     new sap.m.Column({
        //       header: new sap.m.Label({ text: 'Division' }),
        //     }),
        //   )
        //   oTable.addItem(
        //     new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Spart}' })
        //       ],
        //     }),
        //   )
        //   this._oValueHelpDialog = new sap.m.Dialog({
        //     title: 'Division',
        //   })
        //   this.getView().addDependent(this._oValueHelpDialog)
        //   this._oValueHelpDialog.addContent(oTable)
        //   this._oValueHelpDialog.open()
        // },
        // _onSelectionChangeMaterial4: function (oEvent) {
        //   this.byId('division_id').setValue(
        //     oEvent.getParameter('listItem').getBindingContext().getObject().Spart,
        //   )
        //   this._oValueHelpDialog.close()
        // },
       
      
        onMaterial: function () {
          var oView = this.getView();
          if (!this._oTankInfomate) {
            this._oTankInfomate = sap.ui.xmlfragment(oView.getId(), "gmsfiori.view.material", this);
            oView.addDependent(this._oTankInfomate);
          }
          // var oTankModel = new sap.ui.model.json.JSONModel();  
          // this._oTankInfoDialog.setModel(oTankModel);
          this._oTankInfomate.open();  
        },
        onValueHelpClosemat: function(oEvent) {
          var oSelectedItem = oEvent.getParameter("selectedItem");
   
          oEvent.getSource().getBinding("items").filter([]);
     
          if (!oSelectedItem) {
            return;
          }
     
          this.byId("material_id").setValue(oSelectedItem.getTitle());
      },
      onValueHelpSearchmat: function (oEvent1) {
        var sValue1 = oEvent1.getParameter("value");

        var oFilter1 = new Filter(
          "Matnr",
          FilterOperator.Contains,
          sValue1
        );

        oEvent1.getSource().getBinding("items").filter([oFilter1]);
      },
      onUom: function () {
          var oView = this.getView();
          if (!this._oTankInfouom1) {
            this._oTankInfouom1 = sap.ui.xmlfragment(oView.getId(), "gmsfiori.view.uom", this);
            oView.addDependent(this._oTankInfouom1);
          }
          // var oTankModel = new sap.ui.model.json.JSONModel();  
          // this._oTankInfoDialog.setModel(oTankModel);
          this._oTankInfouom1.open(); 
        },
        onValueHelpCloseuom: function(oEvent) {
          var oSelectedItem = oEvent.getParameter("selectedItem");
   
          oEvent.getSource().getBinding("items").filter([]);
     
          if (!oSelectedItem) {
            return;
          }
     
          this.byId("Uom_id").setValue(oSelectedItem.getTitle());
      },
      onValueHelpSearchuom: function (oEvent) {
        var sValue1 = oEvent.getParameter("value");

        var oFilter1 = new Filter(
          "Msehi",
          FilterOperator.Contains,
          sValue1
        );

        oEvent.getSource().getBinding("items").filter([oFilter1]);
      },
      showValueHelpDialog1: function () {
        // Create a dialog
        var oView = this.getView();
          if (!this._oTankInfoDialogsaor) {
            this._oTankInfoDialogsaor = sap.ui.xmlfragment(oView.getId(), "gmsfiori.view.salesorg", this);
            oView.addDependent(this._oTankInfoDialogsaor);
          }
          // var oTankModel = new sap.ui.model.json.JSONModel();  
          // this._oTankInfoDialog.setModel(oTankModel);
          this._oTankInfoDialogsaor.open(); 
      },
      onValueHelpClosesaleorg: function(oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");
 
        oEvent.getSource().getBinding("items").filter([]);
   
        if (!oSelectedItem) {
          return;
        }
   
        this.byId("SalesOrg_id").setValue(oSelectedItem.getTitle());
    },
    onDivison:function(){
      var oView = this.getView();
      if (!this._oTankInfoDialogdiv) {
        this._oTankInfoDialogdiv = sap.ui.xmlfragment(oView.getId(), "gmsfiori.view.division", this);
        oView.addDependent(this._oTankInfoDialogdiv);
      }
      // var oTankModel = new sap.ui.model.json.JSONModel();  
      // this._oTankInfoDialog.setModel(oTankModel);
      this._oTankInfoDialogdiv.open(); 
    },
    onValueHelpClosediv: function(oEvent) {
      var oSelectedItem = oEvent.getParameter("selectedItem");

      oEvent.getSource().getBinding("items").filter([]);
 
      if (!oSelectedItem) {
        return;
      }
 
      this.byId("division_id").setValue(oSelectedItem.getTitle());
  },
        // _onSelectionChangeMaterial5: function (oEvent) {
        //   this.byId('Uom_id').setValue(
        //     oEvent.getParameter('listItem').getBindingContext().getObject().Msehi,
        //   )
        //   this._oValueHelpDialog.close()
        // },

        onPlant: function (oEvent) {
          var oView = this.getView();
          if (!this._oTankInfoDialogpl) {
            this._oTankInfoDialogpl = sap.ui.xmlfragment(oView.getId(), "gmsfiori.view.plant", this);
            oView.addDependent(this._oTankInfoDialogpl);
          }
          // var oTankModel = new sap.ui.model.json.JSONModel();  
          // this._oTankInfoDialog.setModel(oTankModel);
          this._oTankInfoDialogpl.open();
        },
        onValueHelpClosepl: function(oEvent) {
          var oSelectedItem = oEvent.getParameter("selectedItem");
    
          oEvent.getSource().getBinding("items").filter([]);
     
          if (!oSelectedItem) {
            return;
          }
     
          this.byId("Plant_id").setValue(oSelectedItem.getTitle());
      },
        // onTrans: function (oEvent) {
        //   let oTable = new sap.m.Table({
        //     fixedLayout: false,
        //     mode: sap.m.ListMode.SingleSelectLeft,
        //     selectionChange: this._onSelectionChangeMaterial10.bind(this),
        //   })
        //   oTable.bindAggregation('items', {
        //     path: '/TransportSet',
        //     template: new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Tsyst}' })
        //       ],
        //     }),
        //   })
        //   oTable.addColumn(
        //     new sap.m.Column({
        //       header: new sap.m.Label({ text: 'Transport System' }),
        //     }),
        //   )
        //   oTable.addItem(
        //     new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Tsyst}' })
        //       ],
        //     }),
        //   )
        //   this._oValueHelpDialog = new sap.m.Dialog({
        //     title: 'Transport System',
        //   })
        //   this.getView().addDependent(this._oValueHelpDialog)
        //   this._oValueHelpDialog.addContent(oTable)
        //   this._oValueHelpDialog.open()
        // },
        // _onSelectionChangeMaterial10: function (oEvent) {
        //   this.byId('Trans_id').setValue(
        //     oEvent.getParameter('listItem').getBindingContext().getObject().Tsyst,
        //   )
        //   this._oValueHelpDialog.close()
        // },
        // onReceipt: function (oEvent) {
        //   let oTable = new sap.m.Table({
        //     fixedLayout: false,
        //     mode: sap.m.ListMode.SingleSelectLeft,
        //     selectionChange: this._onSelectionChangeMaterial8.bind(this),
        //   })
        //   oTable.bindAggregation('items', {
        //     path: '/LocationPointSet',
        //     template: new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Locid}' })
        //       ],
        //     }),
        //   })
        //   oTable.addColumn(
        //     new sap.m.Column({
        //       header: new sap.m.Label({ text: 'Receipt Point' }),
        //     }),
        //   )
        //   oTable.addItem(
        //     new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Locid}' })
        //       ],
        //     }),
        //   )
        //   this._oValueHelpDialog = new sap.m.Dialog({
        //     title: 'Receipt Point',
        //   })
        //   this.getView().addDependent(this._oValueHelpDialog)
        //   this._oValueHelpDialog.addContent(oTable)
        //   this._oValueHelpDialog.open()
        // },
        // _onSelectionChangeMaterial8: function (oEvent) {
        //   this.byId('Receipt_id').setValue(
        //     oEvent.getParameter('listItem').getBindingContext().getObject().Locid,
        //   )
        //   this._oValueHelpDialog.close()
        // },
        // onDelivery: function (oEvent) {
        //   let oTable = new sap.m.Table({
        //     fixedLayout: false,
        //     mode: sap.m.ListMode.SingleSelectLeft,
        //     selectionChange: this._onSelectionChangeMaterial9.bind(this),
        //   })
        //   oTable.bindAggregation('items', {
        //     path: '/LocationPointSet',
        //     template: new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Locid}' })
        //       ],
        //     }),
        //   })
        //   oTable.addColumn(
        //     new sap.m.Column({
        //       header: new sap.m.Label({ text: 'Delivery Point' }),
        //     }),
        //   )
        //   oTable.addItem(
        //     new sap.m.ColumnListItem({
        //       cells: [
        //         new sap.m.Text({ text: '{Locid}' })
        //       ],
        //     }),
        //   )
        //   this._oValueHelpDialog = new sap.m.Dialog({
        //     title: 'Delivery Point',
        //   })
        //   this.getView().addDependent(this._oValueHelpDialog)
        //   this._oValueHelpDialog.addContent(oTable)
        //   this._oValueHelpDialog.open()
        // },
        // _onSelectionChangeMaterial9: function (oEvent) {
        //   this.byId('Delivery_id').setValue(
        //     oEvent.getParameter('listItem').getBindingContext().getObject().Locid,
        //   )
        //   this._oValueHelpDialog.close()
        // },

		
      });
    }
  );
  