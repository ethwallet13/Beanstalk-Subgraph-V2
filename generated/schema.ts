// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value!.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get lastPriceUSD(): BigDecimal | null {
    let value = this.get("lastPriceUSD");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set lastPriceUSD(value: BigDecimal | null) {
    if (!value) {
      this.unset("lastPriceUSD");
    } else {
      this.set("lastPriceUSD", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get lastPriceBlockNumber(): BigInt | null {
    let value = this.get("lastPriceBlockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastPriceBlockNumber(value: BigInt | null) {
    if (!value) {
      this.unset("lastPriceBlockNumber");
    } else {
      this.set("lastPriceBlockNumber", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class RewardToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RewardToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RewardToken must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RewardToken", id.toString(), this);
    }
  }

  static load(id: string): RewardToken | null {
    return changetype<RewardToken | null>(store.get("RewardToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }
}

export class Beanstalk extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Beanstalk entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Beanstalk must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Beanstalk", id.toString(), this);
    }
  }

  static load(id: string): Beanstalk | null {
    return changetype<Beanstalk | null>(store.get("Beanstalk", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get slug(): string {
    let value = this.get("slug");
    return value!.toString();
  }

  set slug(value: string) {
    this.set("slug", Value.fromString(value));
  }

  get schemaVersion(): string {
    let value = this.get("schemaVersion");
    return value!.toString();
  }

  set schemaVersion(value: string) {
    this.set("schemaVersion", Value.fromString(value));
  }

  get subgraphVersion(): string {
    let value = this.get("subgraphVersion");
    return value!.toString();
  }

  set subgraphVersion(value: string) {
    this.set("subgraphVersion", Value.fromString(value));
  }

  get methodologyVersion(): string {
    let value = this.get("methodologyVersion");
    return value!.toString();
  }

  set methodologyVersion(value: string) {
    this.set("methodologyVersion", Value.fromString(value));
  }

  get network(): string {
    let value = this.get("network");
    return value!.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get lastUpgrade(): BigInt {
    let value = this.get("lastUpgrade");
    return value!.toBigInt();
  }

  set lastUpgrade(value: BigInt) {
    this.set("lastUpgrade", Value.fromBigInt(value));
  }

  get seasons(): Array<string> {
    let value = this.get("seasons");
    return value!.toStringArray();
  }

  set seasons(value: Array<string>) {
    this.set("seasons", Value.fromStringArray(value));
  }

  get silo(): string {
    let value = this.get("silo");
    return value!.toString();
  }

  set silo(value: string) {
    this.set("silo", Value.fromString(value));
  }

  get harvestableIndex(): BigInt {
    let value = this.get("harvestableIndex");
    return value!.toBigInt();
  }

  set harvestableIndex(value: BigInt) {
    this.set("harvestableIndex", Value.fromBigInt(value));
  }
}

export class Season extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Season entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Season must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Season", id.toString(), this);
    }
  }

  static load(id: string): Season | null {
    return changetype<Season | null>(store.get("Season", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get beanstalk(): string {
    let value = this.get("beanstalk");
    return value!.toString();
  }

  set beanstalk(value: string) {
    this.set("beanstalk", Value.fromString(value));
  }

  get season(): i32 {
    let value = this.get("season");
    return value!.toI32();
  }

  set season(value: i32) {
    this.set("season", Value.fromI32(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get twap(): BigDecimal {
    let value = this.get("twap");
    return value!.toBigDecimal();
  }

  set twap(value: BigDecimal) {
    this.set("twap", Value.fromBigDecimal(value));
  }

  get beans(): BigInt {
    let value = this.get("beans");
    return value!.toBigInt();
  }

  set beans(value: BigInt) {
    this.set("beans", Value.fromBigInt(value));
  }

  get deltaBeans(): BigInt {
    let value = this.get("deltaBeans");
    return value!.toBigInt();
  }

  set deltaBeans(value: BigInt) {
    this.set("deltaBeans", Value.fromBigInt(value));
  }

  get harvestableIndex(): BigInt {
    let value = this.get("harvestableIndex");
    return value!.toBigInt();
  }

  set harvestableIndex(value: BigInt) {
    this.set("harvestableIndex", Value.fromBigInt(value));
  }
}

export class Silo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Silo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Silo must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Silo", id.toString(), this);
    }
  }

  static load(id: string): Silo | null {
    return changetype<Silo | null>(store.get("Silo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get beanstalk(): string {
    let value = this.get("beanstalk");
    return value!.toString();
  }

  set beanstalk(value: string) {
    this.set("beanstalk", Value.fromString(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get totalDepositedBDV(): BigInt {
    let value = this.get("totalDepositedBDV");
    return value!.toBigInt();
  }

  set totalDepositedBDV(value: BigInt) {
    this.set("totalDepositedBDV", Value.fromBigInt(value));
  }

  get totalStalk(): BigInt {
    let value = this.get("totalStalk");
    return value!.toBigInt();
  }

  set totalStalk(value: BigInt) {
    this.set("totalStalk", Value.fromBigInt(value));
  }

  get totalSeeds(): BigInt {
    let value = this.get("totalSeeds");
    return value!.toBigInt();
  }

  set totalSeeds(value: BigInt) {
    this.set("totalSeeds", Value.fromBigInt(value));
  }

  get totalBeanMints(): BigInt {
    let value = this.get("totalBeanMints");
    return value!.toBigInt();
  }

  set totalBeanMints(value: BigInt) {
    this.set("totalBeanMints", Value.fromBigInt(value));
  }

  get hourlySnapshots(): Array<string> {
    let value = this.get("hourlySnapshots");
    return value!.toStringArray();
  }

  set hourlySnapshots(value: Array<string>) {
    this.set("hourlySnapshots", Value.fromStringArray(value));
  }

  get dailySnapshots(): Array<string> {
    let value = this.get("dailySnapshots");
    return value!.toStringArray();
  }

  set dailySnapshots(value: Array<string>) {
    this.set("dailySnapshots", Value.fromStringArray(value));
  }
}

export class SiloHourlySnapshots extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SiloHourlySnapshots entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SiloHourlySnapshots must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SiloHourlySnapshots", id.toString(), this);
    }
  }

  static load(id: string): SiloHourlySnapshots | null {
    return changetype<SiloHourlySnapshots | null>(
      store.get("SiloHourlySnapshots", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get season(): i32 {
    let value = this.get("season");
    return value!.toI32();
  }

  set season(value: i32) {
    this.set("season", Value.fromI32(value));
  }

  get silo(): string {
    let value = this.get("silo");
    return value!.toString();
  }

  set silo(value: string) {
    this.set("silo", Value.fromString(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get totalDepositedBDV(): BigInt {
    let value = this.get("totalDepositedBDV");
    return value!.toBigInt();
  }

  set totalDepositedBDV(value: BigInt) {
    this.set("totalDepositedBDV", Value.fromBigInt(value));
  }

  get totalStalk(): BigInt {
    let value = this.get("totalStalk");
    return value!.toBigInt();
  }

  set totalStalk(value: BigInt) {
    this.set("totalStalk", Value.fromBigInt(value));
  }

  get totalSeeds(): BigInt {
    let value = this.get("totalSeeds");
    return value!.toBigInt();
  }

  set totalSeeds(value: BigInt) {
    this.set("totalSeeds", Value.fromBigInt(value));
  }

  get totalBeanMints(): BigInt {
    let value = this.get("totalBeanMints");
    return value!.toBigInt();
  }

  set totalBeanMints(value: BigInt) {
    this.set("totalBeanMints", Value.fromBigInt(value));
  }

  get cumulativeDepositedUSD(): BigDecimal {
    let value = this.get("cumulativeDepositedUSD");
    return value!.toBigDecimal();
  }

  set cumulativeDepositedUSD(value: BigDecimal) {
    this.set("cumulativeDepositedUSD", Value.fromBigDecimal(value));
  }

  get hourlyDepositedUSD(): BigDecimal {
    let value = this.get("hourlyDepositedUSD");
    return value!.toBigDecimal();
  }

  set hourlyDepositedUSD(value: BigDecimal) {
    this.set("hourlyDepositedUSD", Value.fromBigDecimal(value));
  }

  get hourlyDepositedBDV(): BigInt {
    let value = this.get("hourlyDepositedBDV");
    return value!.toBigInt();
  }

  set hourlyDepositedBDV(value: BigInt) {
    this.set("hourlyDepositedBDV", Value.fromBigInt(value));
  }

  get hourlyWithdrawnBDV(): BigInt {
    let value = this.get("hourlyWithdrawnBDV");
    return value!.toBigInt();
  }

  set hourlyWithdrawnBDV(value: BigInt) {
    this.set("hourlyWithdrawnBDV", Value.fromBigInt(value));
  }

  get hourlyClaimableBDV(): BigInt {
    let value = this.get("hourlyClaimableBDV");
    return value!.toBigInt();
  }

  set hourlyClaimableBDV(value: BigInt) {
    this.set("hourlyClaimableBDV", Value.fromBigInt(value));
  }

  get hourlyStalkDelta(): BigInt {
    let value = this.get("hourlyStalkDelta");
    return value!.toBigInt();
  }

  set hourlyStalkDelta(value: BigInt) {
    this.set("hourlyStalkDelta", Value.fromBigInt(value));
  }

  get hourlySeedsDelta(): BigInt {
    let value = this.get("hourlySeedsDelta");
    return value!.toBigInt();
  }

  set hourlySeedsDelta(value: BigInt) {
    this.set("hourlySeedsDelta", Value.fromBigInt(value));
  }

  get hourlyBeanMints(): BigInt {
    let value = this.get("hourlyBeanMints");
    return value!.toBigInt();
  }

  set hourlyBeanMints(value: BigInt) {
    this.set("hourlyBeanMints", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class SiloDailySnapshots extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SiloDailySnapshots entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SiloDailySnapshots must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SiloDailySnapshots", id.toString(), this);
    }
  }

  static load(id: string): SiloDailySnapshots | null {
    return changetype<SiloDailySnapshots | null>(
      store.get("SiloDailySnapshots", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get season(): i32 {
    let value = this.get("season");
    return value!.toI32();
  }

  set season(value: i32) {
    this.set("season", Value.fromI32(value));
  }

  get silo(): string {
    let value = this.get("silo");
    return value!.toString();
  }

  set silo(value: string) {
    this.set("silo", Value.fromString(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get totalDepositedBDV(): BigInt {
    let value = this.get("totalDepositedBDV");
    return value!.toBigInt();
  }

  set totalDepositedBDV(value: BigInt) {
    this.set("totalDepositedBDV", Value.fromBigInt(value));
  }

  get totalStalk(): BigInt {
    let value = this.get("totalStalk");
    return value!.toBigInt();
  }

  set totalStalk(value: BigInt) {
    this.set("totalStalk", Value.fromBigInt(value));
  }

  get totalSeeds(): BigInt {
    let value = this.get("totalSeeds");
    return value!.toBigInt();
  }

  set totalSeeds(value: BigInt) {
    this.set("totalSeeds", Value.fromBigInt(value));
  }

  get totalBeanMints(): BigInt {
    let value = this.get("totalBeanMints");
    return value!.toBigInt();
  }

  set totalBeanMints(value: BigInt) {
    this.set("totalBeanMints", Value.fromBigInt(value));
  }

  get cumulativeDepositedUSD(): BigDecimal {
    let value = this.get("cumulativeDepositedUSD");
    return value!.toBigDecimal();
  }

  set cumulativeDepositedUSD(value: BigDecimal) {
    this.set("cumulativeDepositedUSD", Value.fromBigDecimal(value));
  }

  get dailyDepositedUSD(): BigDecimal {
    let value = this.get("dailyDepositedUSD");
    return value!.toBigDecimal();
  }

  set dailyDepositedUSD(value: BigDecimal) {
    this.set("dailyDepositedUSD", Value.fromBigDecimal(value));
  }

  get dailyDepositedBDV(): BigInt {
    let value = this.get("dailyDepositedBDV");
    return value!.toBigInt();
  }

  set dailyDepositedBDV(value: BigInt) {
    this.set("dailyDepositedBDV", Value.fromBigInt(value));
  }

  get dailyWithdrawnBDV(): BigInt {
    let value = this.get("dailyWithdrawnBDV");
    return value!.toBigInt();
  }

  set dailyWithdrawnBDV(value: BigInt) {
    this.set("dailyWithdrawnBDV", Value.fromBigInt(value));
  }

  get dailyClaimableBDV(): BigInt {
    let value = this.get("dailyClaimableBDV");
    return value!.toBigInt();
  }

  set dailyClaimableBDV(value: BigInt) {
    this.set("dailyClaimableBDV", Value.fromBigInt(value));
  }

  get dailyStalkDelta(): BigInt {
    let value = this.get("dailyStalkDelta");
    return value!.toBigInt();
  }

  set dailyStalkDelta(value: BigInt) {
    this.set("dailyStalkDelta", Value.fromBigInt(value));
  }

  get dailySeedsDelta(): BigInt {
    let value = this.get("dailySeedsDelta");
    return value!.toBigInt();
  }

  set dailySeedsDelta(value: BigInt) {
    this.set("dailySeedsDelta", Value.fromBigInt(value));
  }

  get dailyBeanMints(): BigInt {
    let value = this.get("dailyBeanMints");
    return value!.toBigInt();
  }

  set dailyBeanMints(value: BigInt) {
    this.set("dailyBeanMints", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class SiloAsset extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SiloAsset entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SiloAsset must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SiloAsset", id.toString(), this);
    }
  }

  static load(id: string): SiloAsset | null {
    return changetype<SiloAsset | null>(store.get("SiloAsset", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get silo(): string {
    let value = this.get("silo");
    return value!.toString();
  }

  set silo(value: string) {
    this.set("silo", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get totalDepositedAmount(): BigInt {
    let value = this.get("totalDepositedAmount");
    return value!.toBigInt();
  }

  set totalDepositedAmount(value: BigInt) {
    this.set("totalDepositedAmount", Value.fromBigInt(value));
  }

  get cumulativeDepositedUSD(): BigDecimal {
    let value = this.get("cumulativeDepositedUSD");
    return value!.toBigDecimal();
  }

  set cumulativeDepositedUSD(value: BigDecimal) {
    this.set("cumulativeDepositedUSD", Value.fromBigDecimal(value));
  }

  get totalStalk(): BigInt {
    let value = this.get("totalStalk");
    return value!.toBigInt();
  }

  set totalStalk(value: BigInt) {
    this.set("totalStalk", Value.fromBigInt(value));
  }

  get totalSeeds(): BigInt {
    let value = this.get("totalSeeds");
    return value!.toBigInt();
  }

  set totalSeeds(value: BigInt) {
    this.set("totalSeeds", Value.fromBigInt(value));
  }

  get hourlySnapshots(): Array<string> {
    let value = this.get("hourlySnapshots");
    return value!.toStringArray();
  }

  set hourlySnapshots(value: Array<string>) {
    this.set("hourlySnapshots", Value.fromStringArray(value));
  }

  get dailySnapshots(): Array<string> {
    let value = this.get("dailySnapshots");
    return value!.toStringArray();
  }

  set dailySnapshots(value: Array<string>) {
    this.set("dailySnapshots", Value.fromStringArray(value));
  }
}

export class SiloAssetHourlySnapshots extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save SiloAssetHourlySnapshots entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SiloAssetHourlySnapshots must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SiloAssetHourlySnapshots", id.toString(), this);
    }
  }

  static load(id: string): SiloAssetHourlySnapshots | null {
    return changetype<SiloAssetHourlySnapshots | null>(
      store.get("SiloAssetHourlySnapshots", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get season(): i32 {
    let value = this.get("season");
    return value!.toI32();
  }

  set season(value: i32) {
    this.set("season", Value.fromI32(value));
  }

  get siloAsset(): string {
    let value = this.get("siloAsset");
    return value!.toString();
  }

  set siloAsset(value: string) {
    this.set("siloAsset", Value.fromString(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get totalDepositedAmount(): BigInt {
    let value = this.get("totalDepositedAmount");
    return value!.toBigInt();
  }

  set totalDepositedAmount(value: BigInt) {
    this.set("totalDepositedAmount", Value.fromBigInt(value));
  }

  get totalStalk(): BigInt {
    let value = this.get("totalStalk");
    return value!.toBigInt();
  }

  set totalStalk(value: BigInt) {
    this.set("totalStalk", Value.fromBigInt(value));
  }

  get totalSeeds(): BigInt {
    let value = this.get("totalSeeds");
    return value!.toBigInt();
  }

  set totalSeeds(value: BigInt) {
    this.set("totalSeeds", Value.fromBigInt(value));
  }

  get cumulativeDepositedUSD(): BigDecimal {
    let value = this.get("cumulativeDepositedUSD");
    return value!.toBigDecimal();
  }

  set cumulativeDepositedUSD(value: BigDecimal) {
    this.set("cumulativeDepositedUSD", Value.fromBigDecimal(value));
  }

  get hourlyDepositedUSD(): BigDecimal {
    let value = this.get("hourlyDepositedUSD");
    return value!.toBigDecimal();
  }

  set hourlyDepositedUSD(value: BigDecimal) {
    this.set("hourlyDepositedUSD", Value.fromBigDecimal(value));
  }

  get hourlyDepositedAmount(): BigInt {
    let value = this.get("hourlyDepositedAmount");
    return value!.toBigInt();
  }

  set hourlyDepositedAmount(value: BigInt) {
    this.set("hourlyDepositedAmount", Value.fromBigInt(value));
  }

  get hourlyWithdrawnAmount(): BigInt {
    let value = this.get("hourlyWithdrawnAmount");
    return value!.toBigInt();
  }

  set hourlyWithdrawnAmount(value: BigInt) {
    this.set("hourlyWithdrawnAmount", Value.fromBigInt(value));
  }

  get hourlyStalkDelta(): BigInt {
    let value = this.get("hourlyStalkDelta");
    return value!.toBigInt();
  }

  set hourlyStalkDelta(value: BigInt) {
    this.set("hourlyStalkDelta", Value.fromBigInt(value));
  }

  get hourlySeedsDelta(): BigInt {
    let value = this.get("hourlySeedsDelta");
    return value!.toBigInt();
  }

  set hourlySeedsDelta(value: BigInt) {
    this.set("hourlySeedsDelta", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class SiloAssetDailySnapshots extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save SiloAssetDailySnapshots entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SiloAssetDailySnapshots must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SiloAssetDailySnapshots", id.toString(), this);
    }
  }

  static load(id: string): SiloAssetDailySnapshots | null {
    return changetype<SiloAssetDailySnapshots | null>(
      store.get("SiloAssetDailySnapshots", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get season(): i32 {
    let value = this.get("season");
    return value!.toI32();
  }

  set season(value: i32) {
    this.set("season", Value.fromI32(value));
  }

  get siloAsset(): string {
    let value = this.get("siloAsset");
    return value!.toString();
  }

  set siloAsset(value: string) {
    this.set("siloAsset", Value.fromString(value));
  }

  get totalValueLockedUSD(): BigDecimal {
    let value = this.get("totalValueLockedUSD");
    return value!.toBigDecimal();
  }

  set totalValueLockedUSD(value: BigDecimal) {
    this.set("totalValueLockedUSD", Value.fromBigDecimal(value));
  }

  get totalDepositedAmount(): BigInt {
    let value = this.get("totalDepositedAmount");
    return value!.toBigInt();
  }

  set totalDepositedAmount(value: BigInt) {
    this.set("totalDepositedAmount", Value.fromBigInt(value));
  }

  get totalStalk(): BigInt {
    let value = this.get("totalStalk");
    return value!.toBigInt();
  }

  set totalStalk(value: BigInt) {
    this.set("totalStalk", Value.fromBigInt(value));
  }

  get totalSeeds(): BigInt {
    let value = this.get("totalSeeds");
    return value!.toBigInt();
  }

  set totalSeeds(value: BigInt) {
    this.set("totalSeeds", Value.fromBigInt(value));
  }

  get cumulativeDepositedUSD(): BigDecimal {
    let value = this.get("cumulativeDepositedUSD");
    return value!.toBigDecimal();
  }

  set cumulativeDepositedUSD(value: BigDecimal) {
    this.set("cumulativeDepositedUSD", Value.fromBigDecimal(value));
  }

  get dailyDepositedUSD(): BigDecimal {
    let value = this.get("dailyDepositedUSD");
    return value!.toBigDecimal();
  }

  set dailyDepositedUSD(value: BigDecimal) {
    this.set("dailyDepositedUSD", Value.fromBigDecimal(value));
  }

  get dailyDepositedAmount(): BigInt {
    let value = this.get("dailyDepositedAmount");
    return value!.toBigInt();
  }

  set dailyDepositedAmount(value: BigInt) {
    this.set("dailyDepositedAmount", Value.fromBigInt(value));
  }

  get dailyWithdrawnAmount(): BigInt {
    let value = this.get("dailyWithdrawnAmount");
    return value!.toBigInt();
  }

  set dailyWithdrawnAmount(value: BigInt) {
    this.set("dailyWithdrawnAmount", Value.fromBigInt(value));
  }

  get dailyStalkDelta(): BigInt {
    let value = this.get("dailyStalkDelta");
    return value!.toBigInt();
  }

  set dailyStalkDelta(value: BigInt) {
    this.set("dailyStalkDelta", Value.fromBigInt(value));
  }

  get dailySeedsDelta(): BigInt {
    let value = this.get("dailySeedsDelta");
    return value!.toBigInt();
  }

  set dailySeedsDelta(value: BigInt) {
    this.set("dailySeedsDelta", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}