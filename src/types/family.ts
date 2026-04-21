export type FamilyRole = "mother" | "father" | "child";

export interface FamilyMember {
  id: string;
  name: string;
  role: FamilyRole;
  relationLabel: string;
  avatarSeed: string;
  accentColor: string;
}
