```javascript
import { unstable_getServerSession } from 'next-auth';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Your protected API route logic here
}
```