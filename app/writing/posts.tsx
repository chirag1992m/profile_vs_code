import fs from 'fs'
import matter from 'gray-matter'
import { type WritingDetailProps } from '../src/components/WritingListDetail/WritingDetailView'

const BlogPostFolder = 'public/blog_posts'

export interface postMetadata {
    slug: string
    title: string
    substitle: string
    category: string
    date: string
    cover_image: string
}

export const getAllPostsMetadata = (): postMetadata[] => {
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

export const getCategorizedPosts = (): Record<string, postMetadata[]> => {
    const postsMetadata = getAllPostsMetadata()
    const categories: Record<string, postMetadata[]> = postsMetadata.reduce(
        (x, y) => {
            ;(x[y.category] = x[y.category] || []).push(y)
            return x
        },
        {}
    )

    return categories
}

export const getWritingPost = (slug: string): WritingDetailProps | null => {
    const markdownSlugs = getAllPostsMetadata().map((postMetadata) => {
        return postMetadata.slug
    })

    if (markdownSlugs.includes(slug)) {
        const filePath = `${BlogPostFolder}/${slug}.md`
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const matterResult = matter(fileContent)

        return {
            postMetadata: {
                slug: matterResult.data.slug,
                title: matterResult.data.title,
                substitle: matterResult.data.subtitle,
                category: matterResult.data.category,
                date: matterResult.data.date,
                cover_image: matterResult.data.cover_image,
            },
            postContent: matterResult.content,
        }
    } else {
        return null
    }
}
