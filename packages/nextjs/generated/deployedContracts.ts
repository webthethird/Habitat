const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        Account: {
          address: "0xc5a5C42992dECbae36851359345FE25997F5C42d",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_guardian",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "entryPoint_",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccountLocked",
              type: "error",
            },
            {
              inputs: [],
              name: "ExceedsMaxLockTime",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidInput",
              type: "error",
            },
            {
              inputs: [],
              name: "NotAuthorized",
              type: "error",
            },
            {
              inputs: [],
              name: "OwnershipCycle",
              type: "error",
            },
            {
              inputs: [],
              name: "UntrustedImplementation",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "previousAdmin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "AdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beacon",
                  type: "address",
                },
              ],
              name: "BeaconUpgraded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "lockedUntil",
                  type: "uint256",
                },
              ],
              name: "LockUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "OverrideUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "hasPermission",
                  type: "bool",
                },
              ],
              name: "PermissionUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "target",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "TransactionExecuted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "Upgraded",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              inputs: [],
              name: "_entryPoint",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "entryPoint",
              outputs: [
                {
                  internalType: "contract IEntryPoint",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "executeCall",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "getNonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "guardian",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "isAuthorized",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "isLocked",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              name: "isValidSignature",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "magicValue",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_lockedUntil",
                  type: "uint256",
                },
              ],
              name: "lock",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "lockedUntil",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155BatchReceived",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "receivedTokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC721Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              name: "overrides",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "permissions",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "proxiableUUID",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4[]",
                  name: "selectors",
                  type: "bytes4[]",
                },
                {
                  internalType: "address[]",
                  name: "implementations",
                  type: "address[]",
                },
              ],
              name: "setOverrides",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "callers",
                  type: "address[]",
                },
                {
                  internalType: "bool[]",
                  name: "_permissions",
                  type: "bool[]",
                },
              ],
              name: "setPermissions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "token",
              outputs: [
                {
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
              ],
              name: "upgradeTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "upgradeToAndCall",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
                {
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "missingAccountFunds",
                  type: "uint256",
                },
              ],
              name: "validateUserOp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "validationData",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        AccountGuardian: {
          address: "0x09635F643e140090A9A8Dcd712eD6285858ceBef",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "executor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "trusted",
                  type: "bool",
                },
              ],
              name: "TrustedExecutorUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "trusted",
                  type: "bool",
                },
              ],
              name: "TrustedImplementationUpdated",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isTrustedExecutor",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isTrustedImplementation",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "executor",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "trusted",
                  type: "bool",
                },
              ],
              name: "setTrustedExecutor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "trusted",
                  type: "bool",
                },
              ],
              name: "setTrustedImplementation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        DonationEASResolver: {
          address: "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IEAS",
                  name: "eas",
                  type: "address",
                },
                {
                  internalType: "contract ISchemaRegistry",
                  name: "registry",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_habitat",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccessDenied",
              type: "error",
            },
            {
              inputs: [],
              name: "InsufficientValue",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidEAS",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPayable",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "tx_hash",
                  type: "bytes32",
                },
              ],
              name: "NewDonation",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "VERSION",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "attestation",
                  type: "tuple",
                },
              ],
              name: "attest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "habitatNFT",
              outputs: [
                {
                  internalType: "contract HabitatNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "isPayable",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation[]",
                  name: "attestations",
                  type: "tuple[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "multiAttest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation[]",
                  name: "attestations",
                  type: "tuple[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "multiRevoke",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "attestation",
                  type: "tuple",
                },
              ],
              name: "revoke",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "schema",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "schemaUID",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_habitat",
                  type: "address",
                },
              ],
              name: "setHabitatNFT",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        EAS: {
          address: "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ISchemaRegistry",
                  name: "registry",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccessDenied",
              type: "error",
            },
            {
              inputs: [],
              name: "AlreadyRevoked",
              type: "error",
            },
            {
              inputs: [],
              name: "AlreadyRevokedOffchain",
              type: "error",
            },
            {
              inputs: [],
              name: "AlreadyTimestamped",
              type: "error",
            },
            {
              inputs: [],
              name: "InsufficientValue",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidAttestation",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidAttestations",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidExpirationTime",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidLength",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidOffset",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidRegistry",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidRevocation",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidRevocations",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSchema",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidShortString",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSignature",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidVerifier",
              type: "error",
            },
            {
              inputs: [],
              name: "Irrevocable",
              type: "error",
            },
            {
              inputs: [],
              name: "NotFound",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPayable",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "str",
                  type: "string",
                },
              ],
              name: "StringTooLong",
              type: "error",
            },
            {
              inputs: [],
              name: "WrongSchema",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "attester",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "schema",
                  type: "bytes32",
                },
              ],
              name: "Attested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "EIP712DomainChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "attester",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "schema",
                  type: "bytes32",
                },
              ],
              name: "Revoked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "revoker",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "timestamp",
                  type: "uint64",
                },
              ],
              name: "RevokedOffchain",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "timestamp",
                  type: "uint64",
                },
              ],
              name: "Timestamped",
              type: "event",
            },
            {
              inputs: [],
              name: "VERSION",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "recipient",
                          type: "address",
                        },
                        {
                          internalType: "uint64",
                          name: "expirationTime",
                          type: "uint64",
                        },
                        {
                          internalType: "bool",
                          name: "revocable",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "refUID",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct AttestationRequestData",
                      name: "data",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct AttestationRequest",
                  name: "request",
                  type: "tuple",
                },
              ],
              name: "attest",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "recipient",
                          type: "address",
                        },
                        {
                          internalType: "uint64",
                          name: "expirationTime",
                          type: "uint64",
                        },
                        {
                          internalType: "bool",
                          name: "revocable",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "refUID",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct AttestationRequestData",
                      name: "data",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct EIP712Signature",
                      name: "signature",
                      type: "tuple",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                  ],
                  internalType: "struct DelegatedAttestationRequest",
                  name: "delegatedRequest",
                  type: "tuple",
                },
              ],
              name: "attestByDelegation",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "eip712Domain",
              outputs: [
                {
                  internalType: "bytes1",
                  name: "fields",
                  type: "bytes1",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "version",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "verifyingContract",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "salt",
                  type: "bytes32",
                },
                {
                  internalType: "uint256[]",
                  name: "extensions",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAttestTypeHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
              ],
              name: "getAttestation",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getDomainSeparator",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getName",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getNonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "revoker",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "getRevokeOffchain",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getRevokeTypeHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getSchemaRegistry",
              outputs: [
                {
                  internalType: "contract ISchemaRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
              ],
              name: "isAttestationValid",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "recipient",
                          type: "address",
                        },
                        {
                          internalType: "uint64",
                          name: "expirationTime",
                          type: "uint64",
                        },
                        {
                          internalType: "bool",
                          name: "revocable",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "refUID",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct AttestationRequestData[]",
                      name: "data",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct MultiAttestationRequest[]",
                  name: "multiRequests",
                  type: "tuple[]",
                },
              ],
              name: "multiAttest",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "recipient",
                          type: "address",
                        },
                        {
                          internalType: "uint64",
                          name: "expirationTime",
                          type: "uint64",
                        },
                        {
                          internalType: "bool",
                          name: "revocable",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "refUID",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct AttestationRequestData[]",
                      name: "data",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct EIP712Signature[]",
                      name: "signatures",
                      type: "tuple[]",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                  ],
                  internalType: "struct MultiDelegatedAttestationRequest[]",
                  name: "multiDelegatedRequests",
                  type: "tuple[]",
                },
              ],
              name: "multiAttestByDelegation",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "uid",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct RevocationRequestData[]",
                      name: "data",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct MultiRevocationRequest[]",
                  name: "multiRequests",
                  type: "tuple[]",
                },
              ],
              name: "multiRevoke",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "uid",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct RevocationRequestData[]",
                      name: "data",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct EIP712Signature[]",
                      name: "signatures",
                      type: "tuple[]",
                    },
                    {
                      internalType: "address",
                      name: "revoker",
                      type: "address",
                    },
                  ],
                  internalType: "struct MultiDelegatedRevocationRequest[]",
                  name: "multiDelegatedRequests",
                  type: "tuple[]",
                },
              ],
              name: "multiRevokeByDelegation",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "data",
                  type: "bytes32[]",
                },
              ],
              name: "multiRevokeOffchain",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "data",
                  type: "bytes32[]",
                },
              ],
              name: "multiTimestamp",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "uid",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct RevocationRequestData",
                      name: "data",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct RevocationRequest",
                  name: "request",
                  type: "tuple",
                },
              ],
              name: "revoke",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "uid",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint256",
                          name: "value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct RevocationRequestData",
                      name: "data",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct EIP712Signature",
                      name: "signature",
                      type: "tuple",
                    },
                    {
                      internalType: "address",
                      name: "revoker",
                      type: "address",
                    },
                  ],
                  internalType: "struct DelegatedRevocationRequest",
                  name: "delegatedRequest",
                  type: "tuple",
                },
              ],
              name: "revokeByDelegation",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "revokeOffchain",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
              ],
              name: "timestamp",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        ERC6551Registry: {
          address: "0x4A679253410272dd5232B3Ff7cF5dbB88f295319",
          abi: [
            {
              inputs: [],
              name: "InitializationFailed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
              ],
              name: "AccountCreated",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
              ],
              name: "account",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "initData",
                  type: "bytes",
                },
              ],
              name: "createAccount",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        EntryPoint: {
          address: "0x7a2088a1bFc9d81c55368AE168C2C02570cB814F",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "preOpGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
                {
                  internalType: "uint48",
                  name: "validAfter",
                  type: "uint48",
                },
                {
                  internalType: "uint48",
                  name: "validUntil",
                  type: "uint48",
                },
                {
                  internalType: "bool",
                  name: "targetSuccess",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "targetResult",
                  type: "bytes",
                },
              ],
              name: "ExecutionResult",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "opIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "reason",
                  type: "string",
                },
              ],
              name: "FailedOp",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "SenderAddressResult",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "aggregator",
                  type: "address",
                },
              ],
              name: "SignatureValidationFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "sigFailed",
                      type: "bool",
                    },
                    {
                      internalType: "uint48",
                      name: "validAfter",
                      type: "uint48",
                    },
                    {
                      internalType: "uint48",
                      name: "validUntil",
                      type: "uint48",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterContext",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.ReturnInfo",
                  name: "returnInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "senderInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "factoryInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "paymasterInfo",
                  type: "tuple",
                },
              ],
              name: "ValidationResult",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "sigFailed",
                      type: "bool",
                    },
                    {
                      internalType: "uint48",
                      name: "validAfter",
                      type: "uint48",
                    },
                    {
                      internalType: "uint48",
                      name: "validUntil",
                      type: "uint48",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterContext",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.ReturnInfo",
                  name: "returnInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "senderInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "factoryInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "paymasterInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "aggregator",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "stake",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "unstakeDelaySec",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct IStakeManager.StakeInfo",
                      name: "stakeInfo",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct IEntryPoint.AggregatorStakeInfo",
                  name: "aggregatorInfo",
                  type: "tuple",
                },
              ],
              name: "ValidationResultWithAggregation",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "factory",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
              ],
              name: "AccountDeployed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "BeforeExecution",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "totalDeposit",
                  type: "uint256",
                },
              ],
              name: "Deposited",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "aggregator",
                  type: "address",
                },
              ],
              name: "SignatureAggregatorChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "totalStaked",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "unstakeDelaySec",
                  type: "uint256",
                },
              ],
              name: "StakeLocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "withdrawTime",
                  type: "uint256",
                },
              ],
              name: "StakeUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "StakeWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "actualGasCost",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "actualGasUsed",
                  type: "uint256",
                },
              ],
              name: "UserOperationEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "revertReason",
                  type: "bytes",
                },
              ],
              name: "UserOperationRevertReason",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Withdrawn",
              type: "event",
            },
            {
              inputs: [],
              name: "SIG_VALIDATION_FAILED",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "initCode",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "paymasterAndData",
                  type: "bytes",
                },
              ],
              name: "_validateSenderAndPaymaster",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint32",
                  name: "unstakeDelaySec",
                  type: "uint32",
                },
              ],
              name: "addStake",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "depositTo",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "deposits",
              outputs: [
                {
                  internalType: "uint112",
                  name: "deposit",
                  type: "uint112",
                },
                {
                  internalType: "bool",
                  name: "staked",
                  type: "bool",
                },
                {
                  internalType: "uint112",
                  name: "stake",
                  type: "uint112",
                },
                {
                  internalType: "uint32",
                  name: "unstakeDelaySec",
                  type: "uint32",
                },
                {
                  internalType: "uint48",
                  name: "withdrawTime",
                  type: "uint48",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getDepositInfo",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint112",
                      name: "deposit",
                      type: "uint112",
                    },
                    {
                      internalType: "bool",
                      name: "staked",
                      type: "bool",
                    },
                    {
                      internalType: "uint112",
                      name: "stake",
                      type: "uint112",
                    },
                    {
                      internalType: "uint32",
                      name: "unstakeDelaySec",
                      type: "uint32",
                    },
                    {
                      internalType: "uint48",
                      name: "withdrawTime",
                      type: "uint48",
                    },
                  ],
                  internalType: "struct IStakeManager.DepositInfo",
                  name: "info",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "uint192",
                  name: "key",
                  type: "uint192",
                },
              ],
              name: "getNonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "initCode",
                  type: "bytes",
                },
              ],
              name: "getSenderAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
              ],
              name: "getUserOpHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "sender",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "nonce",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "initCode",
                          type: "bytes",
                        },
                        {
                          internalType: "bytes",
                          name: "callData",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "callGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "verificationGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "preVerificationGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPriorityFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "paymasterAndData",
                          type: "bytes",
                        },
                        {
                          internalType: "bytes",
                          name: "signature",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct UserOperation[]",
                      name: "userOps",
                      type: "tuple[]",
                    },
                    {
                      internalType: "contract IAggregator",
                      name: "aggregator",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
                  name: "opsPerAggregator",
                  type: "tuple[]",
                },
                {
                  internalType: "address payable",
                  name: "beneficiary",
                  type: "address",
                },
              ],
              name: "handleAggregatedOps",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation[]",
                  name: "ops",
                  type: "tuple[]",
                },
                {
                  internalType: "address payable",
                  name: "beneficiary",
                  type: "address",
                },
              ],
              name: "handleOps",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint192",
                  name: "key",
                  type: "uint192",
                },
              ],
              name: "incrementNonce",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "callData",
                  type: "bytes",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "sender",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "nonce",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "callGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "verificationGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "preVerificationGas",
                          type: "uint256",
                        },
                        {
                          internalType: "address",
                          name: "paymaster",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "maxFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPriorityFeePerGas",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct EntryPoint.MemoryUserOp",
                      name: "mUserOp",
                      type: "tuple",
                    },
                    {
                      internalType: "bytes32",
                      name: "userOpHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "contextOffset",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct EntryPoint.UserOpInfo",
                  name: "opInfo",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "context",
                  type: "bytes",
                },
              ],
              name: "innerHandleOp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "actualGasCost",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint192",
                  name: "",
                  type: "uint192",
                },
              ],
              name: "nonceSequenceNumber",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "op",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "target",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "targetCallData",
                  type: "bytes",
                },
              ],
              name: "simulateHandleOp",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
              ],
              name: "simulateValidation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unlockStake",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "withdrawAddress",
                  type: "address",
                },
              ],
              name: "withdrawStake",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "withdrawAmount",
                  type: "uint256",
                },
              ],
              name: "withdrawTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        HabitatNFT: {
          address: "0xE6E340D132b5f46d1e472DebcD681B2aBc16e57E",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_resolver",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_6551Registry",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_6551Impl",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Locked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Unlocked",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "baseSVG",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "burnGreenPoints",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "donationResolver",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "erc6551Accounts",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "grantGreenPoints",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "greenPoints",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "locked",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nftree",
              outputs: [
                {
                  internalType: "contract NFTree",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pointsDecimals",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "renderTokenById",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "renderTokenByOwner",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_nftree",
                  type: "address",
                },
              ],
              name: "setNFTree",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        NFTree: {
          address: "0x67d269191c92Caf3cD7723F116c85e6E9bf55933",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_fromTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_toTokenId",
                  type: "uint256",
                },
              ],
              name: "BatchMetadataUpdate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "MetadataUpdate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "POINTS_TO_MINT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "habitat",
              outputs: [
                {
                  internalType: "contract HabitatNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "svg",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "habitatId",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "renderTokenById",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_habitat",
                  type: "address",
                },
              ],
              name: "setHabitatNFT",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SchemaRegistry: {
          address: "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1",
          abi: [
            {
              inputs: [],
              name: "AlreadyExists",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "registerer",
                  type: "address",
                },
              ],
              name: "Registered",
              type: "event",
            },
            {
              inputs: [],
              name: "VERSION",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "uid",
                  type: "bytes32",
                },
              ],
              name: "getSchema",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "contract ISchemaResolver",
                      name: "resolver",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "schema",
                      type: "string",
                    },
                  ],
                  internalType: "struct SchemaRecord",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "schema",
                  type: "string",
                },
                {
                  internalType: "contract ISchemaResolver",
                  name: "resolver",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "revocable",
                  type: "bool",
                },
              ],
              name: "register",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        DonationEASResolver: {
          address: "0x932C90f9C801535Fe1160921Ec4043AA7b64F75E",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IEAS",
                  name: "eas",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_habitat",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccessDenied",
              type: "error",
            },
            {
              inputs: [],
              name: "InsufficientValue",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidEAS",
              type: "error",
            },
            {
              inputs: [],
              name: "NotPayable",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "tx_hash",
                  type: "bytes32",
                },
              ],
              name: "NewDonation",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "VERSION",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "attestation",
                  type: "tuple",
                },
              ],
              name: "attest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "habitatNFT",
              outputs: [
                {
                  internalType: "contract HabitatNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "isPayable",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation[]",
                  name: "attestations",
                  type: "tuple[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "multiAttest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation[]",
                  name: "attestations",
                  type: "tuple[]",
                },
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
              ],
              name: "multiRevoke",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "uid",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes32",
                      name: "schema",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint64",
                      name: "time",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "expirationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "uint64",
                      name: "revocationTime",
                      type: "uint64",
                    },
                    {
                      internalType: "bytes32",
                      name: "refUID",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "attester",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "revocable",
                      type: "bool",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct Attestation",
                  name: "attestation",
                  type: "tuple",
                },
              ],
              name: "revoke",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_habitat",
                  type: "address",
                },
              ],
              name: "setHabitatNFT",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        HabitatNFT: {
          address: "0xc1d3ED79a410932A339582Cbd996772694C6DB66",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_resolver",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_baseSVG",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Locked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Unlocked",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "baseSVG",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "burnGreenPoints",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "donationResolver",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "erc6551Accounts",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "grantGreenPoints",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "greenPoints",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "locked",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "nftree",
              outputs: [
                {
                  internalType: "contract NFTree",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pointsDecimals",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "renderTokenById",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "renderTokenByOwner",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_nftree",
                  type: "address",
                },
              ],
              name: "setNFTree",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        NFTree: {
          address: "0xD0AFb825abf6921CE59cACE182664a984B9e0AC5",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_fromTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_toTokenId",
                  type: "uint256",
                },
              ],
              name: "BatchMetadataUpdate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "MetadataUpdate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "POINTS_TO_MINT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "habitat",
              outputs: [
                {
                  internalType: "contract HabitatNFT",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "svg",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "habitatId",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "renderTokenById",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_habitat",
                  type: "address",
                },
              ],
              name: "setHabitatNFT",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "tokenOfOwnerByIndex",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
