import { graphql, useStaticQuery } from 'gatsby'

type Props = {
  sites: {
    totalCount: number
    nodes: {
      build_settings: {
        repo_url: string
      }
      name: string
      netlify_id: string
      url: string
    }[]
  }
}

const useNetlify = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      sites: allNetlifySites(sort: { fields: [name], order: ASC }) {
        totalCount
        nodes {
          build_settings {
            repo_url
          }
          name
          netlify_id
          url
        }
      }
    }
  `)

  return {
    count: data.sites.totalCount,
    netlify: data.sites.nodes,
  }
}

export default useNetlify
