/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ArgumentsTypes } from '../arguments/my_psp34';
import type OkishReturns from '../return-values/my_psp34';
import type { GasLimit, GasLimitAndRequiredValue } from '../_sdk/types';
import type { QueryReturnType } from '../_sdk/query';
import { queryJSON } from '../_sdk/query';
import { txSignAndSend } from '../_sdk/tx';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __callerAddress : string;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	 * @arg: args: [
	 * 0: owner,
	 * ]
	 */
	"balanceOf" (
		owner: ArgumentsTypes[8],
		__options: GasLimit,
	): Promise< QueryReturnType< OkishReturns["4"] > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::balanceOf", [owner], __options);
	}

	/**
	 * @arg: args: [
	 * 0: owner,
	 * 1: operator,
	 * 2: id,
	 * ]
	 */
	"allowance" (
		owner: ArgumentsTypes[8],
		operator: ArgumentsTypes[8],
		id: ArgumentsTypes[14],
		__options: GasLimit,
	): Promise< QueryReturnType< OkishReturns["16"] > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::allowance", [owner, operator, id], __options);
	}

	/**
	 * @arg: args: [
	 * 0: to,
	 * 1: id,
	 * 2: data,
	 * ]
	 */
	"transfer" (
		to: ArgumentsTypes[8],
		id: ArgumentsTypes[1],
		data: ArgumentsTypes[7],
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::transfer", [to, id, data], __options);
	}

	/** */
	"collectionId" (
		__options: GasLimit,
	): Promise< QueryReturnType< OkishReturns["1"] > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::collectionId", [], __options);
	}

	/**
	 * @arg: args: [
	 * 0: operator,
	 * 1: id,
	 * 2: approved,
	 * ]
	 */
	"approve" (
		operator: ArgumentsTypes[8],
		id: ArgumentsTypes[14],
		approved: ArgumentsTypes[16],
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::approve", [operator, id, approved], __options);
	}

	/**
	 * @arg: args: [
	 * 0: id,
	 * ]
	 */
	"ownerOf" (
		id: ArgumentsTypes[1],
		__options: GasLimit,
	): Promise< QueryReturnType< OkishReturns["20"] > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::ownerOf", [id], __options);
	}

	/** */
	"totalSupply" (
		__options: GasLimit,
	): Promise< QueryReturnType< OkishReturns["6"] > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::totalSupply", [], __options);
	}

	/**
	 * @arg: args: [
	 * 0: account,
	 * 1: id,
	 * ]
	 */
	"mint" (
		account: ArgumentsTypes[8],
		id: ArgumentsTypes[1],
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Mintable::mint", [account, id], __options);
	}

}