// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

//Tableland
import "./Interfaces/ITablelandTables.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


// Import this file to use console.log
import "hardhat/console.sol";

//Polygon Mumbai Proxy Contract: 0x4b48841d4b32C4650E4ABc117A03FE8B51f38F68

contract Messaging{

    string private _metadataTable;
    uint256 private _metadataTableId;

    ITablelandTables private _tableland;
    string private _tablePrefix = "firechat";


    constructor(
      address registry
    )  {
      /* 
      * The Tableland address on your current chain
      */
      _tableland = ITablelandTables(registry);

      /*
      * Stores the unique ID for the newly created table.
      */
      _metadataTableId = _tableland.createTable(
        address(this),
        string.concat(
          "CREATE TABLE ",
					_tablePrefix,
          Strings.toString(block.chainid),
          "(id int, address text, username text,  servers text, primary key (id));"
        )
      );

      /*
      * Stores the full tablename for the new table. 
      * {prefix}_{chainid}_{tableid}
      */
      _metadataTable = string.concat(
        _tablePrefix,
				"_",
        Strings.toString(block.chainid),
        "_",
        Strings.toString(_metadataTableId)
      );

      

}



    mapping(address=>string) public Users;

   

    function isMember(address _address, string calldata _serverId) public view returns (bool){
        //check if given user is part of the server by verifying
        // if they have the poap.
    }

//     //Associates user with their data on table land.
//     function createAccount(string calldata _link) public {
//         Users[msg.sender] = _link;
//     }

    function getPolicy(address sender)
      public
      payable
      override
      returns (ITablelandController.Policy memory)
  {

     return
          ITablelandController.Policy({
              allowInsert: true,
              allowUpdate: false,
              allowDelete: false,
              whereClause: Policies.joinClauses(new string[](0)),
              withCheck: Policies.joinClauses(new string[](0)),
              updatableColumns: new string[](0)
          });
  }

  function updateController() onlyOwner {
   _tableland.setController(
      address(this),
      _tableId,
      address(this)
    );
}




}