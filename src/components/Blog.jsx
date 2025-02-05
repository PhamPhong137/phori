import { useState } from "react";
import { Heart, MessageCircle, Share2, Play } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const posts = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    timestamp: new Date("2024-02-04T10:00:00"),
    thumbnail: "/placeholder.svg?height=400&width=600",
    description: "Check out this amazing toy in action! #toys #fun #kids",
    likes: 128,
    comments: 24,
  },
  {
    id: 2,
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    timestamp: new Date("2024-02-04T10:00:00"),
    thumbnail: "/placeholder.svg?height=400&width=600",
    description: "Check out this amazing toy in action! #toys #fun #kids",
    likes: 128,
    comments: 24,
  },
  {
    id: 2,
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    timestamp: new Date("2024-02-04T10:00:00"),
    thumbnail: "/placeholder.svg?height=400&width=600",
    description: "Check out this amazing toy in action! #toys #fun #kids",
    likes: 128,
    comments: 24,
  }
];

export default function Blog() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(posts[0].likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((current) => (isLiked ? current - 1 : current + 1));
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-2xl flex space-x-10 ">
        {posts.map((post) => {
          return (
            <div className="bg-white w-96 rounded-xl shadow-md overflow-hidden">
              {/* User Info */}
              <div className="p-4 flex items-center gap-3">
                <img
                  src={post.user.avatar || "/placeholder.svg"}
                  alt={post.user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{post.user.name}</h3>
                  <p className="text-sm text-gray-500">
                    {formatDistanceToNow(post.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>

              {/* Video Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={post.thumbnail || "/placeholder.svg"}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/20 group hover:bg-black/30 transition-colors">
                  <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Actions */}
              <div className="p-4">
                <div className="flex gap-6 mb-4">
                  <button
                    onClick={handleLike}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        isLiked ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                    <span>{likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <MessageCircle className="w-6 h-6" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-700">{post.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
