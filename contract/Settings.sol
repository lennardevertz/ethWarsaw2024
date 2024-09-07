// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Settings {
    mapping(address => address[]) public addressMapping;

    function addAddress(address _newAddress) public {
        require(!isAddressInArray(_newAddress), "Address already exists in the array");
        require(_newAddress != msg.sender, "Cannot copy-trade yourself");
        addressMapping[msg.sender].push(_newAddress);
    }

    function removeAddress(address _removeAddress) public {
        address[] storage userAddresses = addressMapping[msg.sender];

        for (uint i = 0; i < userAddresses.length; i++) {
            if (userAddresses[i] == _removeAddress) {
                userAddresses[i] = userAddresses[userAddresses.length - 1];
                userAddresses.pop();
                break;
            }
        }
    }

    function getAddresses(address _user) public view returns (address[] memory) {
        return addressMapping[_user];
    }

    function isAddressInArray(address _addressToCheck) internal view returns (bool) {
        address[] storage userAddresses = addressMapping[msg.sender];
        for (uint i = 0; i < userAddresses.length; i++) {
            if (userAddresses[i] == _addressToCheck) {
                return true;
            }
        }
        return false;
    }
}
