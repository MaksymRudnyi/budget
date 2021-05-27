[
  '{{repeat(100)}}',
  {
    id: '{{index() + 1}}',
    value: '{{floating(-2000, 2040)}}',
    comment: '{{index() + lorem(4, "words")}}',
    date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd")}}',
  }
]