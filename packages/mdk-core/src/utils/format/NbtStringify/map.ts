export const mapListNum: string[] = [
    'HandDropChances',
    'ArmorDropChances',
    'HandDropChances',
    'ArmorDropChances',
]

export const mapList: string[] = [
    'Lore',
    'CanPlaceOn',
    'CanDestroy',
]

export const mapCompound: string[] = [
    'ActiveEffects',
    'HandItems',
    'ArmorItems',
    'Modifiers',
    'Attributes',
    'Leash',
    'Enchantments',
]

export const mapComposition: string[] = [
    'tag',
    'display',
]

const mapBool = [
    'ExplosionRadius',
    'powered',
    'ignited',
    'CanPickUpLoot',
    'PersistenceRequired',
    'LeftHanded',
    'Leashed',
    'FallFlying',
    'NoAI',
    'OnGround',
    'NoGround',
    'Invulnerable',

]
const mapByte = [
    'Count',
]
const mapShort = [
    'Fuse',
    'HurtTime',
    'DeathTime',
    'Fire',
    'Air',
]
const mapFloat = [
    'HandDropChances',
    'ArmorDropChances',
    'Health',
    'AbsorbtionAmount',
    'Rotation',
    'FallDistance',
    'CustomNameVisible',
    'Silent',
    'Glowing',
]
const mapDouble = [
    'Pos',
    'Motion',
]
const mapLong = [
    'DeathLootTableSeed',
    'UUIDMost',
    'UUIDLeast',
]
const mapHandle = [
    { type: mapBool, suffix: 'b' },
    { type: mapByte, suffix: 'b' },
    { type: mapShort, suffix: 's' },
    { type: mapDouble, suffix: 'd' },
    { type: mapLong, suffix: 'l' },
    { type: mapFloat, suffix: 'f' },
]
export function addSuffix(key: string) {
    const handle = mapHandle.find(item => item.type.includes(key))
    return handle ? handle.suffix : ''
}

export const mapPrefix: object = {
  'Modifiers.Name': 'generic.',
  'id': 'minecraft:'
}