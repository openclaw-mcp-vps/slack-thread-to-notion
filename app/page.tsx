export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Slack + Notion, finally in sync
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Auto-sync Slack threads<br />to Notion databases
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          React to any Slack message or drop a keyword and watch a fully structured Notion page appear — with thread content, participants, and metadata.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get started — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card lock-in.</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">How it works</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { step: '1', title: 'Connect', desc: 'OAuth into Slack and Notion in seconds.' },
            { step: '2', title: 'Configure', desc: 'Pick channels, reactions, or keywords to watch.' },
            { step: '3', title: 'Sync', desc: 'Threads become Notion pages automatically.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-lg mb-2">{item.step}</div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to keep Slack and Notion in sync.</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Unlimited Slack channels',
              'Reaction & keyword triggers',
              'Full thread + participant sync',
              'Real-time webhooks',
              'Dashboard configuration',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which Slack reactions or keywords can I use?',
              a: 'Any emoji reaction or custom keyword phrase. Configure them per-channel from the dashboard after connecting your workspace.',
            },
            {
              q: 'What does the Notion page include?',
              a: 'The full thread text, message timestamps, participant names, a link back to Slack, and any custom metadata you configure.',
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Yes, cancel anytime from your billing portal. You keep access until the end of the billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} SlackToNotion. All rights reserved.
      </footer>
    </main>
  )
}
