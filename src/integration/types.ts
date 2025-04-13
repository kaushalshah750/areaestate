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
      leads: {
        Row: {
          active: boolean | null
          assign_to: string | null
          assigned_date: string | null
          call_scheduled: string | null
          call_status: string | null
          created_by: string
          created_on: string
          email: string | null
          id: number
          last_call: string | null
          lead_status: string
          name: string
          note: string | null
          number: string
          requirement: string
          status: string
          updated_on: string
        }
        Insert: {
          active?: boolean | null
          assign_to?: string | null
          assigned_date?: string | null
          call_scheduled?: string | null
          call_status?: string | null
          created_by: string
          created_on?: string
          email?: string | null
          id?: number
          last_call?: string | null
          lead_status: string
          name: string
          note?: string | null
          number: string
          requirement: string
          status: string
          updated_on?: string
        }
        Update: {
          active?: boolean | null
          assign_to?: string | null
          assigned_date?: string | null
          call_scheduled?: string | null
          call_status?: string | null
          created_by?: string
          created_on?: string
          email?: string | null
          id?: number
          last_call?: string | null
          lead_status?: string
          name?: string
          note?: string | null
          number?: string
          requirement?: string
          status?: string
          updated_on?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_on: string
          current_address: string | null
          dob: string
          email: string
          first_name: string
          gender: Database["public"]["Enums"]["gender_enum"]
          id: string
          joining_date: string
          last_login: string | null
          last_name: string
          mobile: string | null
          permanent_address: string | null
          phone: string | null
          reports_to: string | null
          role_id: number
          updated_on: string
          username: string
          working_location_id: number | null
        }
        Insert: {
          created_on?: string
          current_address?: string | null
          dob: string
          email: string
          first_name: string
          gender: Database["public"]["Enums"]["gender_enum"]
          id: string
          joining_date: string
          last_login?: string | null
          last_name: string
          mobile?: string | null
          permanent_address?: string | null
          phone?: string | null
          reports_to?: string | null
          role_id: number
          updated_on?: string
          username: string
          working_location_id?: number | null
        }
        Update: {
          created_on?: string
          current_address?: string | null
          dob?: string
          email?: string
          first_name?: string
          gender?: Database["public"]["Enums"]["gender_enum"]
          id?: string
          joining_date?: string
          last_login?: string | null
          last_name?: string
          mobile?: string | null
          permanent_address?: string | null
          phone?: string | null
          reports_to?: string | null
          role_id?: number
          updated_on?: string
          username?: string
          working_location_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_working_location_id_fkey"
            columns: ["working_location_id"]
            isOneToOne: false
            referencedRelation: "working_location"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      working_location: {
        Row: {
          id: number
          location: string
        }
        Insert: {
          id?: number
          location: string
        }
        Update: {
          id?: number
          location?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      gender_enum: "Male" | "Female" | "Other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      gender_enum: ["Male", "Female", "Other"],
    },
  },
} as const
