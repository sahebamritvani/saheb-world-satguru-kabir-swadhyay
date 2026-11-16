# Security Specification for Saheb World App

## Data Invariants
1. Only the authorized Admin/Guru Ji can Create, Update, or Delete (CUD) content in `sakhis`, `quizQuestions`, etc.
2. Public users have READ-ONLY access to all content.
3. Users can only READ/WRITE their own `userSettings` and `searchHistory`.

## The "Dirty Dozen" Payloads (Examples)
1. Public user trying to Create a sakhi.
2. Public user trying to Update a sakhi.
3. Public user trying to Delete a sakhi.
4. User A trying to read User B's settings.
5. User A trying to write User B's settings.
6. Admin trying to update settings with invalid fields (e.g., `nityaVaniTime: "25:00"`).
7. Creating a sakhi without required fields (e.g., missing `content`).
8. Injecting a massive string into `sakhi.title` (Size poisoning).
9. Attempting to spoof `authorId` in a community post.
10. Attempting to set `language` to an unsupported value.
11. Attempting to bypass `isValidId()` with invalid characters.
12. Attempting to update `createdAt` timestamp.
