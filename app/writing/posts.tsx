import fs from 'fs'
import matter from 'gray-matter'

const BlogPostFolder = 'public/blog_posts'

export interface postMetadata {
    slug: string
    title: string
    substitle: string
    category: string
    date: string
    cover_image: string
}

export const getPostMedata = (): postMetadata[] => {
    const markdownPosts = fs
        .readdirSync(BlogPostFolder)
        .filter((file) => file.endsWith('.md'))

    const postsMetadata = markdownPosts.map((filename) => {
        const filePath = `${BlogPostFolder}/${filename}`
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const matterResult = matter(fileContent)

        return {
            slug: matterResult.data.slug,
            title: matterResult.data.title,
            substitle: matterResult.data.subtitle,
            category: matterResult.data.category,
            date: matterResult.data.date,
            cover_image: matterResult.data.cover_image,
        }
    })
    return postsMetadata
}

export const getPostContent = (slug: string): string => {
    const markdownSlugs = getPostMedata().map((postMetadata) => {
        return postMetadata.slug
    })

    if (markdownSlugs.includes(slug)) {
        const filePath = `${BlogPostFolder}/${slug}.md`
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const matterResult = matter(fileContent)

        // console.log(content)
        return matterResult.content
    } else {
        return slug
    }
}
