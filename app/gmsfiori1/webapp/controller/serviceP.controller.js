sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (BaseController) {
    "use strict";
    var currentId=29;

    return BaseController.extend("gmsfiori.controller.serviceP", {
      onInit: function () {

      },
      onCreate: function () {
        this.byId("createDialog").open();

        console.log()
      },
      onCreateField: function (oEvent) {
        currentId++;
        var sNewFieldName = this.byId("newFieldNameInput").getValue();
        console.log(sNewFieldName);
        //  var currentId = this.getView().getModel("mainModel").getProperty("/service").length + 1;
        var data = {
          "id": currentId.toString(),
          "ServiceParameter": sNewFieldName
        }

        var JsonData = JSON.stringify(data)
        console.log(JsonData);

        let EndPoint = "/odata/v4/catelog/ServiceCatalogue";
        var that = this;
        fetch(EndPoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JsonData
        })

          .then(function (res) {
            if (res) {
              console.log("Entity created successfully");

              that.byId("createDialog").close();
              that.getView().getModel("mainModel").refresh();
            }
            else {
              console.log("Failed");
            }
          })
          .catch(function (err) {
            console.log("error", err);
          })
      },

      onCancelCreateField: function () {
        this.byId("createDialog").close();
      },
      onComboBoxChange: function (oEvent) {
        var selectedKey = oEvent.getParameter("selectedItem").getKey();
        var oInput1 = this.byId("newFieldNameInput1");
        console.log(selectedKey)
        // Assuming "_IDGenItem1" and "_IDGenItem3" are the correct keys from your ComboBox
        if (selectedKey === "String" || selectedKey === "Boolean") {
          oInput1.setVisible(true);
        } else {
          oInput1.setVisible(false);
        }

      },
      onSubmit: function () {
        // Collect selected checkboxes and submit the data
        this.byId("profileNameDialog").open();

      },

      onSubmitProfile: function () {
        var profilename = this.getView().byId("profileNameInput").getValue()
        var headingdataArr = [];
        var tableDate = this.getView().byId("table0");
        var headingcolumn = tableDate.mAggregations.columns
        for (let index = 0; index < headingcolumn.length; index++) {
          const element = headingcolumn[index];
          var headingData = element.mAggregations.header.mProperties.text;
          headingdataArr.push(headingData)
        }
        var headingcolumnData = tableDate.mAggregations.items
        for (let index = 0; index < headingcolumnData.length; index++) {
          var itemDataArr = [];
          const elementcolumn = headingcolumnData[index];
          const elementcolumnCells = elementcolumn.mAggregations.cells;
          for (let index = 0; index < 2; index++) {
            const elementcolumnCellsitems = elementcolumnCells[index];
            const elementcolumnCellsitemsData = elementcolumnCellsitems.mProperties.text
            itemDataArr.push(elementcolumnCellsitemsData)

          }
          for (let index = 2; index < 3; index++) {
            const elementcolumnCellsitemsDatavalue = elementcolumnCells[index].mProperties.value;
            itemDataArr.push(elementcolumnCellsitemsDatavalue)

          }
          for (let index = 3; index < elementcolumnCells.length; index++) {
            const elementcolumnCellsitemsDataselect = elementcolumnCells[index].mProperties.selected;
            itemDataArr.push(elementcolumnCellsitemsDataselect)
          }

          var dataobj = {
            "Pname": profilename,
            "Service_Parameter": itemDataArr[0],
            "ID": itemDataArr[1],
            "Parent_ID": itemDataArr[2],
            "Contract_Relevant": itemDataArr[3],
            "Quantity_Parameter": itemDataArr[4],
            "Threshold_Relevance": itemDataArr[5],
            "Referrence_Relevant": itemDataArr[6],
            "Nomination_Relevant": itemDataArr[7],
            "Balancing_Relevant": itemDataArr[8],
            "Allocation_Relevant": itemDataArr[9],
            "Billing_Relevant": itemDataArr[10],
            "Price_Relevant": itemDataArr[11],
          }

          var jsondataObj = JSON.stringify(dataobj)

          let EndPoint = "/odata/v4/catelog/Profile";
          var that = this;
          fetch(EndPoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: jsondataObj
          })

            .then(function (res) {
              if (res) {
                console.log("Entity created successfully");
              }
              else {
                console.log("Failed");
              }
            })
            .catch(function (err) {
              console.log("error", err);
            })

          console.log(itemDataArr);

        }

        this.byId("profileNameDialog").close();
      },

      onCancelProfile: function () {
        // Close the profile name dialog without taking any action
        this.byId("profileNameDialog").close();
      },
    });
  }
);

