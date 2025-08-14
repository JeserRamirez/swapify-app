//Tyoes
export enum SwapStatusType {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  CANCELLED = 'canceled',
  COMPLETED = 'completed'
}

export enum ItemConditionType {
  NEW = 'new',
  LIKE_NEW = 'like new',
  USED = 'used',
  WELL_USED = 'well used',
}

export enum LinkType {
  WEBSITE = 'website',
  DISCORD = 'discord',
  YOUTUBE = 'youtube',
  X = 'x',
  INSTAGRAM = 'instagram'
}

// Intefaces
interface seedUser {
  username: string,
  email: string,
  password: string,
  displayName: string,
  avatarUrl?: string
  location: string,
}

interface seedUserLink {
  type: LinkType,
  url: string,
}

interface seedFollower {
  
}

interface seedItem {
  title: string,
  description: string,
  available: boolean,
  condition: ItemConditionType,
}

interface seedImage {
  url: string,
  order: number
}

interface seedCategory {
  name: string,
  slug: string
}

interface seedItemCategory {

}

interface seedSwap {
  message: string,
  status: SwapStatusType
}

interface seedNotification {
  title: string,
  body: string,
  data?: JSON,
  read: boolean,
}

interface seedReview {
  rating: number,
  comment: string,
}

export interface seedData {
  users: seedUser[],
  userLinks: seedUserLink[],
  followers: seedFollower[],
  items: seedItem[],
  images: seedImage[],
  categories: seedCategory[],
  itemCategories: seedItemCategory[],
  swaps: seedSwap[],
  notifications: seedNotification[],
  reviews: seedReview[]
}