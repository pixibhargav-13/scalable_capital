// Editorial content for the Insights section.
// Body blocks: { p }, { h2 }, { quote }, { list: [...] }
const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=88`

export const categories = ['All', 'Business', 'Finance']

export const insights = [
  {
    slug: 'why-cash-flow-matters-more-than-revenue',
    category: 'Business',
    title: 'Why Cash Flow Matters More Than Revenue',
    excerpt: 'Revenue can tell you how fast you are moving. Cash tells you whether you can keep moving.',
    date: '15 Sep 2026',
    readTime: '6 min read',
    image: img('1545324418-cc1a3fa10c00'),
    caption: 'Liquidity / Resilience / Momentum',
    body: [
      { p: 'Revenue is the number most founders quote first. It is visible, easy to celebrate and, for many businesses, the headline metric investors ask about. But revenue is a measure of activity. It does not tell you whether the business can pay its people on Friday, fund the next hire or survive a slow quarter.' },
      { p: 'Cash does. And the gap between the two is where many otherwise healthy businesses get into trouble.' },
      { h2: 'Profitable on paper, short of cash in practice' },
      { p: 'A business can grow its top line, report a profit and still run out of money. The reasons are rarely dramatic. Customers take 60 days to pay while suppliers want payment in 30. Inventory is bought ahead of demand. A large contract requires upfront investment in people before the first invoice goes out.' },
      { p: 'Each decision is sensible on its own. Together, they quietly absorb working capital — and growth, counter-intuitively, makes the problem larger. The faster you grow, the more cash is tied up in receivables and stock before it comes back.' },
      { quote: 'Growth consumes cash before it produces it. The question is not whether you are growing, but whether you can fund the growth you are creating.' },
      { h2: 'What strong cash discipline looks like' },
      { p: 'Businesses that manage cash well are not necessarily more conservative. They simply have better visibility, earlier. In practice that usually means:' },
      { list: [
        'A rolling 13-week cash forecast, updated weekly and owned by someone accountable for it.',
        'Clear visibility of the cash conversion cycle — how long it takes for a rupee or dirham spent to come back as cash received.',
        'Credit terms and collections treated as a commercial lever, not an administrative afterthought.',
        'Growth investments evaluated for their cash profile, not just their eventual return.',
      ] },
      { h2: 'Turning cash into a strategic advantage' },
      { p: 'When leadership can see cash clearly, decisions change. Hiring can be timed with confidence. Supplier negotiations happen from a position of strength. Opportunities — an acquisition, a new market, a bulk purchase at a discount — can be acted on quickly instead of being lost to uncertainty.' },
      { p: 'Revenue will always matter. But the businesses that scale sustainably are the ones that understand a simple truth early: momentum is funded by cash, and cash rewards those who plan for it.' },
    ],
  },
  {
    slug: 'building-a-forecast-leadership-actually-uses',
    category: 'Finance',
    title: 'Building a Forecast Leadership Actually Uses',
    excerpt: 'Most forecasts are built once and ignored. The useful ones are simple, driver-based and alive.',
    date: '6 Aug 2026',
    readTime: '5 min read',
    image: img('1487958449943-2429e8be8625'),
    caption: 'Structure / Precision / Foresight',
    body: [
      { p: 'Almost every business has a budget. Far fewer have a forecast that leadership genuinely relies on. The annual budget is built with great effort, presented once, and then quietly drifts out of relevance as reality moves on.' },
      { p: 'A forecast that gets used is different in three ways: it is driver-based, it is updated regularly and it is simple enough for non-finance leaders to understand.' },
      { h2: 'Start with drivers, not line items' },
      { p: 'Instead of forecasting revenue as a single number, a driver-based model breaks it into the things that actually cause it — leads, conversion rates, average order value, retention, pricing. Costs are linked to activity: headcount to hiring plans, fulfilment costs to volume.' },
      { p: 'The benefit is that when something changes, the forecast changes with it. Leadership can see which lever matters most and what happens if it moves.' },
      { quote: 'A good forecast is not a prediction. It is a tool for understanding which decisions matter most.' },
      { h2: 'Make scenarios part of the rhythm' },
      { list: [
        'Base case — the most realistic view of the next 12–18 months.',
        'Downside case — what happens if key assumptions disappoint, and what the response would be.',
        'Upside case — what capacity, capital and people would be needed if growth accelerates.',
      ] },
      { h2: 'Keep it alive' },
      { p: 'A monthly reforecast, reviewed alongside actual results, turns the forecast from a document into a conversation. Variances become learning, assumptions get sharper and leadership develops a shared, numerate view of where the business is heading.' },
      { p: 'The aim is not perfect accuracy. It is earlier, better decisions — made with a clear view of the trade-offs.' },
    ],
  },
  {
    slug: 'the-kpis-that-actually-drive-value',
    category: 'Business',
    title: 'The KPIs That Actually Drive Value',
    excerpt: 'Dashboards are easy to build. Choosing the handful of measures that truly matter is harder.',
    date: '22 Jul 2026',
    readTime: '4 min read',
    image: img('1564566698730-9903b9e4a08c'),
    caption: 'Architecture / Insight / Performance',
    body: [
      { p: 'Modern tools make it effortless to track hundreds of metrics. The result, in many businesses, is a dashboard full of numbers and very little clarity about which ones deserve attention.' },
      { p: 'Good KPI architecture is an exercise in restraint. It identifies the small number of measures that genuinely drive value — and connects each one to someone who can influence it.' },
      { h2: 'Leading versus lagging indicators' },
      { p: 'Revenue and profit are lagging indicators: they tell you how well you did. Leading indicators — pipeline quality, customer retention, utilisation, gross margin by product — tell you how well you are likely to do. A balanced set includes both.' },
      { quote: 'If a metric does not change a decision, it is information — not a KPI.' },
      { h2: 'A practical test for every KPI' },
      { list: [
        'Is it clearly defined, so everyone calculates it the same way?',
        'Does a named owner have the ability to influence it?',
        'Is it reviewed often enough to act on?',
        'Does it connect to profitability, cash or long-term value?',
      ] },
      { h2: 'Profitability is rarely evenly spread' },
      { p: 'One of the most valuable exercises a growing business can do is to understand profitability by customer, product and channel. It is common to find that a minority of activity generates most of the profit — and that some growth is quietly destroying value.' },
      { p: 'With that clarity, strategy sharpens. Resources flow to what works, pricing gets revisited and the business grows more profitably, not just faster.' },
    ],
  },
]

export const getInsight = (slug) => insights.find((i) => i.slug === slug)
