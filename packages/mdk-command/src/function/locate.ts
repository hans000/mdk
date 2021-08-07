export type StructureType = 
    | 'Buried_Treasure' 
    | 'EndCity' 
    | 'Fortress' 
    | 'Mineshaft' 
    | 'Monument' 
    | 'Ocean_Ruin' 
    | 'Shipwreck' 
    | 'Stronghold' 
    | 'Desert_Pyramid' 
    | 'Igloo' 
    | 'Jungle_Pyramid' 
    | 'Swamp_Hut' 
    | 'Village' 
    | 'Pillager_Outpost' 
    | 'Nether_Fossil'

/**
 * 在聊天框中为命令执行者显示给定类型结构的最近坐标和距离。
 * @param structure 结构类型
 */
 export default function(structure: StructureType) {
    return `locate ${structure}`
}
