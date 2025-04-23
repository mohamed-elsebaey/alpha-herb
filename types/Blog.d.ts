interface Blog {
  id: number;
  title: string;
  description: string;
  image_path: string;
  category?: string;
  product?: string;
  author_id?: number;
  author_name: string;
  author_profile_path: string;
  article_content?:string;
  created_at: Date;
  updated_at?: Date;
}
