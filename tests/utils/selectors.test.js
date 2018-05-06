import contentFiltered from "../../src/utils/selectors";

const MOCK_RESPONSE = {
  _embedded: {
    "viaplay:blocks": [
      {
        _embedded: {
          "viaplay:products": [
            {
              content: {
                series: {
                  title: "First series title"
                },
                distraction: {
                  value: "this will not be in result"
                },
                production: {
                  year: 2005
                },
                imdb: {
                  url: "https://imdb.com/title1"
                },
                images: {
                  landscape: {
                    template: "https://imageurl1.se{?distraction}"
                  }
                }
              }
            },
            {
              content: {
                series: {
                  title: "Second series title"
                },

                production: {
                  year: 2009
                },

                images: {
                  landscape: {
                    template: "https://imageurl2.se{whatisthis}"
                  }
                }
              }
            },
            {
              content: {
                series: {
                  title: "Third series title"
                },
                production: {
                  year: 1998
                },
                imdb: {
                  url: "https://imdb.com/title3"
                },
                images: {
                  landscape: {
                    template: "https://imageurl3.se{?width,height}"
                  }
                }
              }
            }
          ]
        }
      }
    ]
  }
};

const EXPECTED_RESULT = {
  content: [
    {
      title: "First series title",
      productionYear: 2005,
      imdbUrl: "https://imdb.com/title1",
      imageUrl: "https://imageurl1.se?width=500&height=280"
    },
    {
      title: "Second series title",
      productionYear: 2009,
      imdbUrl: undefined,
      imageUrl: "https://imageurl2.se?width=500&height=280"
    },
    {
      title: "Third series title",
      productionYear: 1998,
      imdbUrl: "https://imdb.com/title3",
      imageUrl: "https://imageurl3.se?width=500&height=280"
    }
  ]
};

describe("contentFiltered selector filters the result as expected", () => {
  it("Should give back the data clean", () => {
    expect(contentFiltered(MOCK_RESPONSE)).toEqual({
      ...EXPECTED_RESULT
    });
  });
});
