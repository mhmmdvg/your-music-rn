export interface userType {
  images: [
    {
      url: string;
    },
  ];
  display_name: string;
  id: string;
  followers: {
    total: number;
  };
}
