import { bp } from 'binparse';
import { ActStrut, PathStrut, PlayerStrut, StatListStrut } from '../structures.js';
import { Pointer } from './pointer.js';

export const UnitAnyPlayerStrutD2r = bp.object('UnitAnyPlayer', {
  type: bp.lu32,
  txtFileNo: bp.lu32,
  unitId: bp.lu32,
  mode: bp.lu32,
  /** Pointer to PlayerStrut */
  pPlayer: new Pointer(PlayerStrut),
  actId: bp.lu32,
  // New??
  unk1: bp.lu32,
  /** Pointer to Act */
  pAct: new Pointer(ActStrut),
  seedA: bp.lu32,
  seedB: bp.lu32,
  unk2: bp.array('Unk2', new Pointer(bp.lu32), 1),
  pPath: new Pointer(PathStrut),
  unk3: bp.skip(40),
  unk4: bp.array('Unk4', new Pointer(bp.lu32), 4),

  pStats: new Pointer(StatListStrut),

  unk5: bp.array('Unk5', new Pointer(bp.lu32), 25),

  nextUnit: bp.lu64,
});

export const D2RStrut = {
  UnitPlayer: UnitAnyPlayerStrutD2r,
};
