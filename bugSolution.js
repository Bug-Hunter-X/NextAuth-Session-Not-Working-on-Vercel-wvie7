```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]'; // Import your authOptions

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  //Ensure authOptions are correctly defined and exported, with all necessary providers and secret
  console.log('Session:', session); // Log to inspect the session object

  // Your protected API route logic here
  res.status(200).json({ message: 'Protected API route accessed successfully', session });
}
```