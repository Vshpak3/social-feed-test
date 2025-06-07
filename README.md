## Project Structure

Here's how everything is organized:

```
src/
├── components/      # All the UI building blocks
│   ├── PostList.tsx  # Shows posts in a scrollable list
│   ├── PostDetail.tsx # Detailed view of a single post
│   ├── Filters.tsx   # Search and filter controls
│   └── ...           # Other UI components
├── hooks/           # Custom React hooks
│   └── usePosts.ts   # Manages post data and state
├── services/        # Handles API communication
└── types/           # TypeScript type definitions
```
