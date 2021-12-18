exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    GraphCMS_Post: {
      relatedPosts: {
        type: ["GraphCMS_Post"],
        resolve: async (source, args, context, info) => {
          const { entries } = await context.nodeModel.findAll({
            query: {
              filter: {
                id: {
                  ne: source.id,
                },
                category: {
                  name: { eq: source.category.name },
                },
              },
            },
            type: "GraphCMS_Post",
          })

          console.log(source.category.name)

          return entries
        },
      },
    },
  }

  createResolvers(resolvers)
}
