export default async function handler(req, res) {  
    try {
      if (req.headers.secret !== process.env.CONTENTFUL_WEBHOOK_SECRET) {
        return res.status(401).json({ message: 'Invalid token' })
      }
      await res.revalidate('/fluxMedia')
      return res.json({ revalidated: true })
    } catch (err) {
      return res.status(500).send('Error revalidating')
    }
  }