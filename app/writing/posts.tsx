import fs from 'fs'

const BlogPostFolder = 'public/blog_posts'

const getPostMedata = () => {
    const markdownPosts = fs
        .readdirSync(BlogPostFolder)
        .filter((file) => file.endsWith('.md'))
    const markdownSlugs = markdownPosts.map((post) => post.replace('.md', ''))
    return markdownSlugs
}

export const getPostContent = (slug: string) => {
    const markdownSlugs = getPostMedata()

    if (markdownSlugs.includes(slug)) {
        const filePath = `${BlogPostFolder}/${slug}.md`
        const content = fs.readFileSync(filePath, 'utf-8')

        return content
    } else {
        return slug
    }
}
