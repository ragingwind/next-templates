import fetch from 'node-fetch'

const OBJECT_KEY = process.env.NEXT_TEMPLATE_COSMICJS_OBJECT_ID
const READ_KEY = process.env.NEXT_TEMPLATE_COSMICJS_READ_KEY

export async function getObjects(props) {
  const url = `https://api.cosmicjs.com/v1/${OBJECT_KEY}/objects?type=posts&props=${props}&read_key=${READ_KEY}`
  const res = await fetch(url, {
    method: 'GET'
  })

  return (await res.json()).objects
}

export async function getObject(slug, props) {
  const url = `https://api.cosmicjs.com/v1/${OBJECT_KEY}/object/${slug}?props=${props}&read_key=${READ_KEY}`
  const res = await fetch(url, {
    method: 'GET'
  })

  return (await res.json()).object
}