import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const blog = await getCollection("blog");

    return rss({
        title: "Andrei (f24816)",
        description: "A blog about politics, technology, art and more.",
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            content: sanitizeHtml(parser.render(post.body.replace(/<iframe\s+.*?<\/iframe>/g, ''))
                .replace(/<img\s+src="([^"]+)"[^>]*>/g, '<a href="$1" target="_blank">Image</a>'), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['a'])
            }),
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
