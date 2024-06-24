export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      AEDs: {
        Row: {
          active: string | null
          aedManufacturer: string | null
          aedModel: string | null
          complianceStatus: string | null
          inspectedBy: string | null
          installDate: string | null
          lastInspection: string | null
          "License Expiration": string | null
          location: string | null
          p_key: string
          "Primary Battery Expiration": string | null
          "Primary Electrode Pad Expiration": string | null
          serialNumber: string | null
          siteAddress: string | null
          siteCity: string | null
          siteCounty: string | null
          siteName: string | null
          sitePostalCode: number | null
        }
        Insert: {
          active?: string | null
          aedManufacturer?: string | null
          aedModel?: string | null
          complianceStatus?: string | null
          inspectedBy?: string | null
          installDate?: string | null
          lastInspection?: string | null
          "License Expiration"?: string | null
          location?: string | null
          p_key: string
          "Primary Battery Expiration"?: string | null
          "Primary Electrode Pad Expiration"?: string | null
          serialNumber?: string | null
          siteAddress?: string | null
          siteCity?: string | null
          siteCounty?: string | null
          siteName?: string | null
          sitePostalCode?: number | null
        }
        Update: {
          active?: string | null
          aedManufacturer?: string | null
          aedModel?: string | null
          complianceStatus?: string | null
          inspectedBy?: string | null
          installDate?: string | null
          lastInspection?: string | null
          "License Expiration"?: string | null
          location?: string | null
          p_key?: string
          "Primary Battery Expiration"?: string | null
          "Primary Electrode Pad Expiration"?: string | null
          serialNumber?: string | null
          siteAddress?: string | null
          siteCity?: string | null
          siteCounty?: string | null
          siteName?: string | null
          sitePostalCode?: number | null
        }
        Relationships: []
      }
      libraries: {
        Row: {
          aed_check: boolean | null
          bin: number | null
          borough: string | null
          city: string | null
          code: string | null
          coordinator: string | null
          ehs_inspection: string | null
          housenum: string | null
          hvac_inspections: string | null
          location: unknown | null
          mewp_inventory: string | null
          name: string | null
          network: string | null
          p_key: string
          roof_inventory: string | null
          status: string | null
          streetname: string | null
          system: string | null
          url: string | null
          X: number | null
          Y: number | null
          zip: number | null
        }
        Insert: {
          aed_check?: boolean | null
          bin?: number | null
          borough?: string | null
          city?: string | null
          code?: string | null
          coordinator?: string | null
          ehs_inspection?: string | null
          housenum?: string | null
          hvac_inspections?: string | null
          location?: unknown | null
          mewp_inventory?: string | null
          name?: string | null
          network?: string | null
          p_key: string
          roof_inventory?: string | null
          status?: string | null
          streetname?: string | null
          system?: string | null
          url?: string | null
          X?: number | null
          Y?: number | null
          zip?: number | null
        }
        Update: {
          aed_check?: boolean | null
          bin?: number | null
          borough?: string | null
          city?: string | null
          code?: string | null
          coordinator?: string | null
          ehs_inspection?: string | null
          housenum?: string | null
          hvac_inspections?: string | null
          location?: unknown | null
          mewp_inventory?: string | null
          name?: string | null
          network?: string | null
          p_key?: string
          roof_inventory?: string | null
          status?: string | null
          streetname?: string | null
          system?: string | null
          url?: string | null
          X?: number | null
          Y?: number | null
          zip?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
