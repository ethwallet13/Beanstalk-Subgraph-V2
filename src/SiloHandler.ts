import { BigInt, Address, Bytes, BigDecimal, store } from "@graphprotocol/graph-ts"
import {
  AddDeposit,
  AddWithdrawal,
  RemoveDeposit,
  RemoveDeposits,
  RemoveWithdrawal,
  RemoveWithdrawals,
  SeedsBalanceChanged,
  StalkBalanceChanged,
} from "../generated/Silo-Replanted/Beanstalk"
import { Beanstalk, Season, Silo, Token, Farmer, FarmerBalance, SiloDeposit, SiloWithdraw, SiloHourlySnapshots, SiloDailySnapshots, SiloAsset, SiloAssetHourlySnapshots, SiloAssetDailySnapshots } from "../generated/schema"
import { ZERO_BI, ONE_BI, ZERO_BD, ONE_BD, BI_6, BI_10, BI_18, BD_18, DEFAULT_DECIMALS, toDecimal } from "./utils/Decimals"
import { ADDRESS_ZERO, BEAN_ERC20, BEAN_DECIMALS } from "./utils/Constants"
import { dayFromTimestamp } from "./utils/Dates"
import { loadSeason } from "./utils/Season"

let SEASONS_PER_WEEK = BigInt.fromI32(168)
let SEASONS_PER_30DAYS = BigInt.fromI32(720)
let BEANSTALK_ADDRESS = Address.fromString('0xc1e088fc1323b20bcbee9bd1b9fc9546db5624c5')
let BEAN_PAIR_ADDRESS = Address.fromString('0x87898263b6c5babe34b4ec53f22d98430b91e371')
let USDC_PAIR_ADDRESS = Address.fromString('0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc')
let CURVE_PAIR_ADDRESS = Address.fromString('0x3a70dfa7d2262988064a2d051dd47521e43c9bdd')
let BEAN_ADDRESS = Address.fromString('0xdc59ac4fefa32293a95889dc396682858d52e5db')
//bean curve factories
let beancrv3PairAddress = Address.fromString('0x3a70DfA7d2262988064A2D051dd47521E43c9BdD')


export function handleAddDeposit(event: AddDeposit): void {

    let timestamp = event.block.timestamp
    let season = getCurrentSeason()
    let account = getAccount(event.params.account)
    let deposit = getDeposit(account, timestamp)
    deposit.season = event.params.season
    deposit.token = event.params.token
    deposit.amount = convertIntegerToDecimal(event.params.amount, BI_18)
    deposit.bdv = convertIntegerToDecimal(event.params.bdv, BI_6)
    deposit.save()
}




 function getDeposit(farmer: Farmer, season: Season, token: Token) : SiloDeposit {
   let id = farmer.id.toString().concat('-').concat(season.id.toString())
   let deposit = SiloDeposit.load(id)
   if (deposit != null) return deposit as SiloDeposit
   deposit = new SiloDeposit(id)
   deposit.farmers = farmer.id
   deposit.season = season.id
   deposit.tokens = token.id
   deposit.amount = ZERO_BD
   deposit.bdv = ZERO_BD
   return deposit as SiloDeposit
}

function getWithdraw(farmer: Farmer, season: Season, token: Token) : SiloWithdraw {
  let id = farmer.id.toString().concat('-').concat(season.id.toString())
  let withdraww = SiloWithdraw.load(id)
  if (withdraww != null) return withdraww as SiloWithdraw
  withdraww = new SiloWithdraw(id)
  withdraww.farmers = farmer.id
  withdraww.season = season.id
  withdraww.tokens = token.id
  withdraww.amount = ZERO_BD
  withdraww.bdv = ZERO_BD
  return withdraww as SiloWithdraw
}

function getSilo(account: Account, season: Season) : Silo {
    let id = account.id.toString().concat('-').concat(season.id.toString())
    let silo = Silo.load(id)
    if (deposit != null) return deposit as LPDeposit
    deposit = new LPDeposit(id)
    deposit.account = account.id
    deposit.season = season.id
    deposit.lp = ZERO_BD
    return deposit as LPDeposit
 }
