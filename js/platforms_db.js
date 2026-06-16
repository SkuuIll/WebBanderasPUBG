// ─── PLATFORMS DATABASE ─────────────────────────────────────────
// Base de datos de plataformas, redes sociales y servicios populares
// Cada plataforma tiene: tag, name, category, color, logoUrl

const platformsDB = [
  // ─── REDES SOCIALES ───────────────────────────────────────────
  { tag: 'facebook', name: 'Facebook', category: 'Social', color: '#1877F2', logoUrl: 'https://cdn.simpleicons.org/facebook/FFFFFF' },
  { tag: 'instagram', name: 'Instagram', category: 'Social', color: '#E4405F', logoUrl: 'https://cdn.simpleicons.org/instagram/FFFFFF' },
  { tag: 'twitter', name: 'Twitter', category: 'Social', color: '#1DA1F2', logoUrl: 'https://cdn.simpleicons.org/twitter/FFFFFF' },
  { tag: 'x', name: 'X (Twitter)', category: 'Social', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/x/FFFFFF' },
  { tag: 'tiktok', name: 'TikTok', category: 'Social', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/tiktok/FFFFFF' },
  { tag: 'snapchat', name: 'Snapchat', category: 'Social', color: '#FFFC00', logoUrl: 'https://cdn.simpleicons.org/snapchat/000000' },
  { tag: 'linkedin', name: 'LinkedIn', category: 'Social', color: '#0A66C2', logoUrl: 'https://cdn.simpleicons.org/linkedin/FFFFFF' },
  { tag: 'reddit', name: 'Reddit', category: 'Social', color: '#FF4500', logoUrl: 'https://cdn.simpleicons.org/reddit/FFFFFF' },
  { tag: 'pinterest', name: 'Pinterest', category: 'Social', color: '#E60023', logoUrl: 'https://cdn.simpleicons.org/pinterest/FFFFFF' },
  { tag: 'tumblr', name: 'Tumblr', category: 'Social', color: '#36465D', logoUrl: 'https://cdn.simpleicons.org/tumblr/FFFFFF' },
  { tag: 'whatsapp', name: 'WhatsApp', category: 'Social', color: '#25D366', logoUrl: 'https://cdn.simpleicons.org/whatsapp/FFFFFF' },
  { tag: 'telegram', name: 'Telegram', category: 'Social', color: '#26A5E4', logoUrl: 'https://cdn.simpleicons.org/telegram/FFFFFF' },
  { tag: 'discord', name: 'Discord', category: 'Social', color: '#5865F2', logoUrl: 'https://cdn.simpleicons.org/discord/FFFFFF' },
  { tag: 'slack', name: 'Slack', category: 'Social', color: '#4A154B', logoUrl: 'https://cdn.simpleicons.org/slack/FFFFFF' },
  { tag: 'mastodon', name: 'Mastodon', category: 'Social', color: '#6364FF', logoUrl: 'https://cdn.simpleicons.org/mastodon/FFFFFF' },
  { tag: 'threads', name: 'Threads', category: 'Social', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/threads/FFFFFF' },
  { tag: 'bluesky', name: 'Bluesky', category: 'Social', color: '#1185FE', logoUrl: 'https://cdn.simpleicons.org/bluesky/FFFFFF' },
  { tag: 'messenger', name: 'Messenger', category: 'Social', color: '#00B2FF', logoUrl: 'https://cdn.simpleicons.org/messenger/FFFFFF' },
  { tag: 'wechat', name: 'WeChat', category: 'Social', color: '#07C160', logoUrl: 'https://cdn.simpleicons.org/wechat/FFFFFF' },
  { tag: 'line', name: 'LINE', category: 'Social', color: '#06C755', logoUrl: 'https://cdn.simpleicons.org/line/FFFFFF' },
  { tag: 'viber', name: 'Viber', category: 'Social', color: '#7360F2', logoUrl: 'https://cdn.simpleicons.org/viber/FFFFFF' },
  { tag: 'signal', name: 'Signal', category: 'Social', color: '#3A76F0', logoUrl: 'https://cdn.simpleicons.org/signal/FFFFFF' },
  { tag: 'kakaotalk', name: 'KakaoTalk', category: 'Social', color: '#FFCD00', logoUrl: 'https://cdn.simpleicons.org/kakaotalk/000000' },
  { tag: 'qq', name: 'QQ', category: 'Social', color: '#12B7F5', logoUrl: 'https://cdn.simpleicons.org/tencentqq/FFFFFF' },
  { tag: 'weibo', name: 'Weibo', category: 'Social', color: '#E6162D', logoUrl: 'https://cdn.simpleicons.org/sinaweibo/FFFFFF' },
  { tag: 'vk', name: 'VK', category: 'Social', color: '#0077FF', logoUrl: 'https://cdn.simpleicons.org/vk/FFFFFF' },
  { tag: 'odnoklassniki', name: 'Odnoklassniki', category: 'Social', color: '#EE8208', logoUrl: 'https://cdn.simpleicons.org/odnoklassniki/FFFFFF' },
  { tag: 'behance', name: 'Behance', category: 'Social', color: '#1769FF', logoUrl: 'https://cdn.simpleicons.org/behance/FFFFFF' },
  { tag: 'dribbble', name: 'Dribbble', category: 'Social', color: '#EA4C89', logoUrl: 'https://cdn.simpleicons.org/dribbble/FFFFFF' },
  { tag: 'flickr', name: 'Flickr', category: 'Social', color: '#0063DC', logoUrl: 'https://cdn.simpleicons.org/flickr/FFFFFF' },
  { tag: 'quora', name: 'Quora', category: 'Social', color: '#B92B27', logoUrl: 'https://cdn.simpleicons.org/quora/FFFFFF' },
  { tag: 'deviantart', name: 'DeviantArt', category: 'Social', color: '#05CC47', logoUrl: 'https://cdn.simpleicons.org/deviantart/FFFFFF' },
  { tag: 'imgur', name: 'Imgur', category: 'Social', color: '#1BB76E', logoUrl: 'https://cdn.simpleicons.org/imgur/FFFFFF' },
  { tag: 'meetup', name: 'Meetup', category: 'Social', color: '#ED1C40', logoUrl: 'https://cdn.simpleicons.org/meetup/FFFFFF' },
  { tag: 'nextdoor', name: 'Nextdoor', category: 'Social', color: '#8ED500', logoUrl: 'https://cdn.simpleicons.org/nextdoor/FFFFFF' },
  { tag: 'strava', name: 'Strava', category: 'Social', color: '#FC4C02', logoUrl: 'https://cdn.simpleicons.org/strava/FFFFFF' },
  { tag: 'yelp', name: 'Yelp', category: 'Social', color: '#FF1A1A', logoUrl: 'https://cdn.simpleicons.org/yelp/FFFFFF' },
  { tag: 'clubhouse', name: 'Clubhouse', category: 'Social', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/clubhouse/FFFFFF' },
  { tag: 'patreon', name: 'Patreon', category: 'Social', color: '#FF424D', logoUrl: 'https://cdn.simpleicons.org/patreon/FFFFFF' },
  { tag: 'kofi', name: 'Ko-fi', category: 'Social', color: '#29ABE0', logoUrl: 'https://cdn.simpleicons.org/kofi/FFFFFF' },
  { tag: 'buymeacoffee', name: 'Buy Me a Coffee', category: 'Social', color: '#FFDD00', logoUrl: 'https://cdn.simpleicons.org/buymeacoffee/000000' },
  { tag: 'discourse', name: 'Discourse', category: 'Social', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/discourse/FFFFFF' },
  { tag: 'disqus', name: 'Disqus', category: 'Social', color: '#2E9FFF', logoUrl: 'https://cdn.simpleicons.org/disqus/FFFFFF' },
  
  // ─── STREAMING VIDEO ──────────────────────────────────────────
  { tag: 'youtube', name: 'YouTube', category: 'Streaming', color: '#FF0000', logoUrl: 'https://cdn.simpleicons.org/youtube/FFFFFF' },
  { tag: 'twitch', name: 'Twitch', category: 'Streaming', color: '#9146FF', logoUrl: 'https://cdn.simpleicons.org/twitch/FFFFFF' },
  { tag: 'kick', name: 'Kick', category: 'Streaming', color: '#53FC18', logoUrl: 'https://cdn.simpleicons.org/kick/000000' },
  { tag: 'vimeo', name: 'Vimeo', category: 'Streaming', color: '#1AB7EA', logoUrl: 'https://cdn.simpleicons.org/vimeo/FFFFFF' },
  { tag: 'dailymotion', name: 'Dailymotion', category: 'Streaming', color: '#0066DC', logoUrl: 'https://cdn.simpleicons.org/dailymotion/FFFFFF' },
  
  // ─── STREAMING PLATAFORMAS ────────────────────────────────────
  { tag: 'netflix', name: 'Netflix', category: 'Streaming', color: '#E50914', logoUrl: 'https://cdn.simpleicons.org/netflix/FFFFFF' },
  { tag: 'hbo', name: 'HBO Max', category: 'Streaming', color: '#B10DC9', logoUrl: 'https://cdn.simpleicons.org/hbomax/FFFFFF' },
  { tag: 'disneyplus', name: 'Disney+', category: 'Streaming', color: '#113CCF', logoUrl: 'https://cdn.simpleicons.org/disneyplus/FFFFFF' },
  { tag: 'primevideo', name: 'Prime Video', category: 'Streaming', color: '#00A8E1', logoUrl: 'https://cdn.simpleicons.org/primevideo/FFFFFF' },
  { tag: 'hulu', name: 'Hulu', category: 'Streaming', color: '#1CE783', logoUrl: 'https://cdn.simpleicons.org/hulu/FFFFFF' },
  { tag: 'paramount', name: 'Paramount+', category: 'Streaming', color: '#0064FF', logoUrl: 'https://cdn.simpleicons.org/paramountplus/FFFFFF' },
  { tag: 'appletv', name: 'Apple TV+', category: 'Streaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/appletv/FFFFFF' },
  { tag: 'crunchyroll', name: 'Crunchyroll', category: 'Streaming', color: '#F47521', logoUrl: 'https://cdn.simpleicons.org/crunchyroll/FFFFFF' },
  
  // ─── MÚSICA ───────────────────────────────────────────────────
  { tag: 'spotify', name: 'Spotify', category: 'Música', color: '#1DB954', logoUrl: 'https://cdn.simpleicons.org/spotify/FFFFFF' },
  { tag: 'applemusic', name: 'Apple Music', category: 'Música', color: '#FA243C', logoUrl: 'https://cdn.simpleicons.org/applemusic/FFFFFF' },
  { tag: 'soundcloud', name: 'SoundCloud', category: 'Música', color: '#FF3300', logoUrl: 'https://cdn.simpleicons.org/soundcloud/FFFFFF' },
  { tag: 'deezer', name: 'Deezer', category: 'Música', color: '#FEAA2D', logoUrl: 'https://cdn.simpleicons.org/deezer/FFFFFF' },
  { tag: 'tidal', name: 'Tidal', category: 'Música', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/tidal/FFFFFF' },
  { tag: 'youtubemusic', name: 'YouTube Music', category: 'Música', color: '#FF0000', logoUrl: 'https://cdn.simpleicons.org/youtubemusic/FFFFFF' },
  { tag: 'pandora', name: 'Pandora', category: 'Música', color: '#005483', logoUrl: 'https://cdn.simpleicons.org/pandora/FFFFFF' },
  
  // ─── GAMING ───────────────────────────────────────────────────
  { tag: 'steam', name: 'Steam', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/steam/FFFFFF' },
  { tag: 'epicgames', name: 'Epic Games', category: 'Gaming', color: '#313131', logoUrl: 'https://cdn.simpleicons.org/epicgames/FFFFFF' },
  { tag: 'playstation', name: 'PlayStation', category: 'Gaming', color: '#003791', logoUrl: 'https://cdn.simpleicons.org/playstation/FFFFFF' },
  { tag: 'xbox', name: 'Xbox', category: 'Gaming', color: '#107C10', logoUrl: 'https://cdn.simpleicons.org/xbox/FFFFFF' },
  { tag: 'nintendo', name: 'Nintendo', category: 'Gaming', color: '#E60012', logoUrl: 'https://cdn.simpleicons.org/nintendoswitch/FFFFFF' },
  { tag: 'riotgames', name: 'Riot Games', category: 'Gaming', color: '#D32936', logoUrl: 'https://cdn.simpleicons.org/riotgames/FFFFFF' },
  { tag: 'rockstargames', name: 'Rockstar Games', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/rockstargames/FFFFFF' },
  { tag: 'ea', name: 'EA Games', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/ea/FFFFFF' },
  { tag: 'ubisoft', name: 'Ubisoft', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/ubisoft/FFFFFF' },
  { tag: 'blizzard', name: 'Blizzard', category: 'Gaming', color: '#148EFF', logoUrl: 'https://cdn.simpleicons.org/blizzardentertainment/FFFFFF' },
  { tag: 'battlenet', name: 'Battle.net', category: 'Gaming', color: '#00AEFF', logoUrl: 'https://cdn.simpleicons.org/battledotnet/FFFFFF' },
  { tag: 'gog', name: 'GOG', category: 'Gaming', color: '#86328A', logoUrl: 'https://cdn.simpleicons.org/gogdotcom/FFFFFF' },
  { tag: 'itchio', name: 'itch.io', category: 'Gaming', color: '#FA5C5C', logoUrl: 'https://cdn.simpleicons.org/itchdotio/FFFFFF' },
  { tag: 'roblox', name: 'Roblox', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/roblox/FFFFFF' },
  { tag: 'minecraft', name: 'Minecraft', category: 'Gaming', color: '#62B47A', logoUrl: 'https://cdn.simpleicons.org/minecraft/FFFFFF' },
  { tag: 'fortnite', name: 'Fortnite', category: 'Gaming', color: '#5C2D91', logoUrl: 'https://cdn.simpleicons.org/fortnite/FFFFFF' },
  { tag: 'valorant', name: 'Valorant', category: 'Gaming', color: '#FA4454', logoUrl: 'https://cdn.simpleicons.org/valorant/FFFFFF' },
  { tag: 'leagueoflegends', name: 'League of Legends', category: 'Gaming', color: '#C28F2C', logoUrl: 'https://cdn.simpleicons.org/leagueoflegends/FFFFFF' },
  { tag: 'dota2', name: 'Dota 2', category: 'Gaming', color: '#BF2B2B', logoUrl: 'https://cdn.simpleicons.org/dota2/FFFFFF' },
  { tag: 'pubg', name: 'PUBG', category: 'Gaming', color: '#F2A900', logoUrl: 'https://cdn.simpleicons.org/pubg/000000' },
  { tag: 'apexlegends', name: 'Apex Legends', category: 'Gaming', color: '#DA292A', logoUrl: 'https://cdn.simpleicons.org/apexlegends/FFFFFF' },
  { tag: 'origin', name: 'Origin', category: 'Gaming', color: '#F56C2D', logoUrl: 'https://cdn.simpleicons.org/origin/FFFFFF' },
  { tag: 'unity', name: 'Unity', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/unity/FFFFFF' },
  { tag: 'unrealengine', name: 'Unreal Engine', category: 'Gaming', color: '#0E1128', logoUrl: 'https://cdn.simpleicons.org/unrealengine/FFFFFF' },
  { tag: 'godotengine', name: 'Godot', category: 'Gaming', color: '#478CBF', logoUrl: 'https://cdn.simpleicons.org/godotengine/FFFFFF' },
  { tag: 'bethesda', name: 'Bethesda', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/bethesda/FFFFFF' },
  { tag: 'capcom', name: 'Capcom', category: 'Gaming', color: '#0046A5', logoUrl: 'https://cdn.simpleicons.org/capcom/FFFFFF' },
  { tag: 'squareenix', name: 'Square Enix', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/squareenix/FFFFFF' },
  { tag: 'bandainamco', name: 'Bandai Namco', category: 'Gaming', color: '#F9A01B', logoUrl: 'https://cdn.simpleicons.org/bandainamco/FFFFFF' },
  { tag: 'konami', name: 'Konami', category: 'Gaming', color: '#C01818', logoUrl: 'https://cdn.simpleicons.org/konami/FFFFFF' },
  { tag: 'sega', name: 'SEGA', category: 'Gaming', color: '#0089CF', logoUrl: 'https://cdn.simpleicons.org/sega/FFFFFF' },
  { tag: 'activision', name: 'Activision', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/activision/FFFFFF' },
  { tag: 'tencentgames', name: 'Tencent Games', category: 'Gaming', color: '#00A1E9', logoUrl: 'https://cdn.simpleicons.org/tencentgames/FFFFFF' },
  { tag: 'garena', name: 'Garena', category: 'Gaming', color: '#E41F1B', logoUrl: 'https://cdn.simpleicons.org/garena/FFFFFF' },
  { tag: 'supercell', name: 'Supercell', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/supercell/FFFFFF' },
  { tag: 'overwatch', name: 'Overwatch', category: 'Gaming', color: '#F99E1A', logoUrl: 'https://cdn.simpleicons.org/overwatch/FFFFFF' },
  { tag: 'hearthstone', name: 'Hearthstone', category: 'Gaming', color: '#8B5A2B', logoUrl: 'https://cdn.simpleicons.org/hearthstone/FFFFFF' },
  { tag: 'diablo', name: 'Diablo', category: 'Gaming', color: '#B71C1C', logoUrl: 'https://cdn.simpleicons.org/diablo/FFFFFF' },
  { tag: 'starcraft', name: 'StarCraft', category: 'Gaming', color: '#0B4D8C', logoUrl: 'https://cdn.simpleicons.org/starcraft/FFFFFF' },
  { tag: 'worldofwarcraft', name: 'World of Warcraft', category: 'Gaming', color: '#0E7AC4', logoUrl: 'https://cdn.simpleicons.org/worldofwarcraft/FFFFFF' },
  { tag: 'callofduty', name: 'Call of Duty', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/callofduty/FFFFFF' },
  { tag: 'battlefield', name: 'Battlefield', category: 'Gaming', color: '#0055AA', logoUrl: 'https://cdn.simpleicons.org/battlefield/FFFFFF' },
  { tag: 'fifa', name: 'FIFA', category: 'Gaming', color: '#1E5AA8', logoUrl: 'https://cdn.simpleicons.org/fifa/FFFFFF' },
  { tag: 'rocketleague', name: 'Rocket League', category: 'Gaming', color: '#0065FF', logoUrl: 'https://cdn.simpleicons.org/rocketleague/FFFFFF' },
  { tag: 'rainbowsix', name: 'Rainbow Six Siege', category: 'Gaming', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/rainbowsixsiege/FFFFFF' },
  { tag: 'counterstrike', name: 'Counter-Strike', category: 'Gaming', color: '#F2A900', logoUrl: 'https://cdn.simpleicons.org/counterstrike/FFFFFF' },
  { tag: 'cs2', name: 'CS2', category: 'Gaming', color: '#F2A900', logoUrl: 'https://cdn.simpleicons.org/counterstrike/FFFFFF' },
  { tag: 'amongus', name: 'Among Us', category: 'Gaming', color: '#C91616', logoUrl: 'https://cdn.simpleicons.org/amongus/FFFFFF' },
  { tag: 'fallguys', name: 'Fall Guys', category: 'Gaming', color: '#F1A4D0', logoUrl: 'https://cdn.simpleicons.org/fallguys/000000' },
  { tag: 'genshinimpact', name: 'Genshin Impact', category: 'Gaming', color: '#2F8CFF', logoUrl: 'https://cdn.simpleicons.org/genshinimpact/FFFFFF' },
  
  // ─── TECNOLOGÍA ───────────────────────────────────────────────
  { tag: 'google', name: 'Google', category: 'Tech', color: '#4285F4', logoUrl: 'https://cdn.simpleicons.org/google/FFFFFF' },
  { tag: 'apple', name: 'Apple', category: 'Tech', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/apple/FFFFFF' },
  { tag: 'microsoft', name: 'Microsoft', category: 'Tech', color: '#5E5E5E', logoUrl: 'https://cdn.simpleicons.org/microsoft/5E5E5E' },
  { tag: 'amazon', name: 'Amazon', category: 'Tech', color: '#FF9900', logoUrl: 'https://cdn.simpleicons.org/amazon/FF9900' },
  { tag: 'meta', name: 'Meta', category: 'Tech', color: '#0668E1', logoUrl: 'https://cdn.simpleicons.org/meta/0668E1' },
  { tag: 'samsung', name: 'Samsung', category: 'Tech', color: '#1428A0', logoUrl: 'https://cdn.simpleicons.org/samsung/1428A0' },
  { tag: 'huawei', name: 'Huawei', category: 'Tech', color: '#FF0000', logoUrl: 'https://cdn.simpleicons.org/huawei/FF0000' },
  { tag: 'xiaomi', name: 'Xiaomi', category: 'Tech', color: '#FF6900', logoUrl: 'https://cdn.simpleicons.org/xiaomi/FF6900' },
  { tag: 'sony', name: 'Sony', category: 'Tech', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/sony/000000' },
  { tag: 'nvidia', name: 'NVIDIA', category: 'Tech', color: '#76B900', logoUrl: 'https://cdn.simpleicons.org/nvidia/76B900' },
  { tag: 'amd', name: 'AMD', category: 'Tech', color: '#ED1C24', logoUrl: 'https://cdn.simpleicons.org/amd/ED1C24' },
  { tag: 'intel', name: 'Intel', category: 'Tech', color: '#0071C5', logoUrl: 'https://cdn.simpleicons.org/intel/0071C5' },
  
  // ─── DESARROLLO ───────────────────────────────────────────────
  { tag: 'github', name: 'GitHub', category: 'Dev', color: '#181717', logoUrl: 'https://cdn.simpleicons.org/github/181717' },
  { tag: 'gitlab', name: 'GitLab', category: 'Dev', color: '#FC6D26', logoUrl: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
  { tag: 'stackoverflow', name: 'Stack Overflow', category: 'Dev', color: '#F58025', logoUrl: 'https://cdn.simpleicons.org/stackoverflow/F58025' },
  { tag: 'vscode', name: 'VS Code', category: 'Dev', color: '#007ACC', logoUrl: 'https://cdn.simpleicons.org/visualstudiocode/007ACC' },
  { tag: 'docker', name: 'Docker', category: 'Dev', color: '#2496ED', logoUrl: 'https://cdn.simpleicons.org/docker/2496ED' },
  { tag: 'kubernetes', name: 'Kubernetes', category: 'Dev', color: '#326CE5', logoUrl: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { tag: 'aws', name: 'AWS', category: 'Dev', color: '#FF9900', logoUrl: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
  { tag: 'azure', name: 'Azure', category: 'Dev', color: '#0078D4', logoUrl: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
  { tag: 'firebase', name: 'Firebase', category: 'Dev', color: '#FFCA28', logoUrl: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { tag: 'vercel', name: 'Vercel', category: 'Dev', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/vercel/000000' },
  { tag: 'netlify', name: 'Netlify', category: 'Dev', color: '#00C7B7', logoUrl: 'https://cdn.simpleicons.org/netlify/00C7B7' },
  
  // ─── E-COMMERCE ───────────────────────────────────────────────
  { tag: 'shopify', name: 'Shopify', category: 'E-commerce', color: '#7AB55C', logoUrl: 'https://cdn.simpleicons.org/shopify/7AB55C' },
  { tag: 'ebay', name: 'eBay', category: 'E-commerce', color: '#E53238', logoUrl: 'https://cdn.simpleicons.org/ebay/E53238' },
  { tag: 'aliexpress', name: 'AliExpress', category: 'E-commerce', color: '#FF6A00', logoUrl: 'https://cdn.simpleicons.org/aliexpress/FF6A00' },
  { tag: 'mercadolibre', name: 'Mercado Libre', category: 'E-commerce', color: '#FFE600', logoUrl: 'https://cdn.simpleicons.org/mercadolibre/FFE600' },
  { tag: 'etsy', name: 'Etsy', category: 'E-commerce', color: '#F16521', logoUrl: 'https://cdn.simpleicons.org/etsy/F16521' },
  
  // ─── PAGOS ────────────────────────────────────────────────────
  { tag: 'paypal', name: 'PayPal', category: 'Pagos', color: '#00457C', logoUrl: 'https://cdn.simpleicons.org/paypal/00457C' },
  { tag: 'stripe', name: 'Stripe', category: 'Pagos', color: '#008CDD', logoUrl: 'https://cdn.simpleicons.org/stripe/008CDD' },
  { tag: 'visa', name: 'Visa', category: 'Pagos', color: '#1A1F71', logoUrl: 'https://cdn.simpleicons.org/visa/1A1F71' },
  { tag: 'mastercard', name: 'Mastercard', category: 'Pagos', color: '#EB001B', logoUrl: 'https://cdn.simpleicons.org/mastercard/EB001B' },
  { tag: 'applepay', name: 'Apple Pay', category: 'Pagos', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/applepay/000000' },
  { tag: 'googlepay', name: 'Google Pay', category: 'Pagos', color: '#4285F4', logoUrl: 'https://cdn.simpleicons.org/googlepay/4285F4' },
  
  // ─── NOTICIAS Y MEDIOS ────────────────────────────────────────
  { tag: 'medium', name: 'Medium', category: 'Medios', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/medium/000000' },
  { tag: 'substack', name: 'Substack', category: 'Medios', color: '#FF6719', logoUrl: 'https://cdn.simpleicons.org/substack/FF6719' },
  { tag: 'wordpress', name: 'WordPress', category: 'Medios', color: '#21759B', logoUrl: 'https://cdn.simpleicons.org/wordpress/21759B' },
  { tag: 'blogger', name: 'Blogger', category: 'Medios', color: '#FF5722', logoUrl: 'https://cdn.simpleicons.org/blogger/FF5722' },
  { tag: 'wix', name: 'Wix', category: 'Medios', color: '#0C6EFC', logoUrl: 'https://cdn.simpleicons.org/wix/0C6EFC' },
  
  // ─── PRODUCTIVIDAD ────────────────────────────────────────────
  { tag: 'notion', name: 'Notion', category: 'Productividad', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/notion/000000' },
  { tag: 'trello', name: 'Trello', category: 'Productividad', color: '#0052CC', logoUrl: 'https://cdn.simpleicons.org/trello/0052CC' },
  { tag: 'asana', name: 'Asana', category: 'Productividad', color: '#F06A6A', logoUrl: 'https://cdn.simpleicons.org/asana/F06A6A' },
  { tag: 'monday', name: 'Monday.com', category: 'Productividad', color: '#FF3D57', logoUrl: 'https://cdn.simpleicons.org/monday/FF3D57' },
  { tag: 'evernote', name: 'Evernote', category: 'Productividad', color: '#00A82D', logoUrl: 'https://cdn.simpleicons.org/evernote/00A82D' },
  { tag: 'dropbox', name: 'Dropbox', category: 'Productividad', color: '#0061FF', logoUrl: 'https://cdn.simpleicons.org/dropbox/0061FF' },
  { tag: 'googledrive', name: 'Google Drive', category: 'Productividad', color: '#4285F4', logoUrl: 'https://cdn.simpleicons.org/googledrive/4285F4' },
  { tag: 'onedrive', name: 'OneDrive', category: 'Productividad', color: '#0078D4', logoUrl: 'https://cdn.simpleicons.org/microsoftonedrive/0078D4' },
  
  // ─── DISEÑO ───────────────────────────────────────────────────
  { tag: 'figma', name: 'Figma', category: 'Diseño', color: '#F24E1E', logoUrl: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { tag: 'canva', name: 'Canva', category: 'Diseño', color: '#00C4CC', logoUrl: 'https://cdn.simpleicons.org/canva/00C4CC' },
  { tag: 'adobephotoshop', name: 'Photoshop', category: 'Diseño', color: '#31A8FF', logoUrl: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF' },
  { tag: 'adobeillustrator', name: 'Illustrator', category: 'Diseño', color: '#FF9A00', logoUrl: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00' },
  { tag: 'adobexd', name: 'Adobe XD', category: 'Diseño', color: '#FF61F6', logoUrl: 'https://cdn.simpleicons.org/adobexd/FF61F6' },
  { tag: 'sketch', name: 'Sketch', category: 'Diseño', color: '#F7B500', logoUrl: 'https://cdn.simpleicons.org/sketch/F7B500' },
  
  // ─── EDUCACIÓN ────────────────────────────────────────────────
  { tag: 'udemy', name: 'Udemy', category: 'Educación', color: '#A435F0', logoUrl: 'https://cdn.simpleicons.org/udemy/A435F0' },
  { tag: 'coursera', name: 'Coursera', category: 'Educación', color: '#0056D2', logoUrl: 'https://cdn.simpleicons.org/coursera/0056D2' },
  { tag: 'duolingo', name: 'Duolingo', category: 'Educación', color: '#58CC02', logoUrl: 'https://cdn.simpleicons.org/duolingo/58CC02' },
  { tag: 'khanacademy', name: 'Khan Academy', category: 'Educación', color: '#14BF96', logoUrl: 'https://cdn.simpleicons.org/khanacademy/14BF96' },
  
  // ─── DELIVERY Y TRANSPORTE ────────────────────────────────────
  { tag: 'uber', name: 'Uber', category: 'Transporte', color: '#000000', logoUrl: 'https://cdn.simpleicons.org/uber/000000' },
  { tag: 'ubereats', name: 'Uber Eats', category: 'Delivery', color: '#06C167', logoUrl: 'https://cdn.simpleicons.org/ubereats/06C167' },
  { tag: 'doordash', name: 'DoorDash', category: 'Delivery', color: '#FF3008', logoUrl: 'https://cdn.simpleicons.org/doordash/FF3008' },
  { tag: 'rappi', name: 'Rappi', category: 'Delivery', color: '#FF441F', logoUrl: 'https://cdn.simpleicons.org/rappi/FF441F' },
  { tag: 'airbnb', name: 'Airbnb', category: 'Viajes', color: '#FF5A5F', logoUrl: 'https://cdn.simpleicons.org/airbnb/FF5A5F' },
  { tag: 'booking', name: 'Booking.com', category: 'Viajes', color: '#003580', logoUrl: 'https://cdn.simpleicons.org/bookingdotcom/003580' },
  
  // ─── OTROS POPULARES ──────────────────────────────────────────
  { tag: 'zoom', name: 'Zoom', category: 'Comunicación', color: '#2D8CFF', logoUrl: 'https://cdn.simpleicons.org/zoom/2D8CFF' },
  { tag: 'skype', name: 'Skype', category: 'Comunicación', color: '#00AFF0', logoUrl: 'https://cdn.simpleicons.org/skype/00AFF0' },
  { tag: 'teams', name: 'Microsoft Teams', category: 'Comunicación', color: '#6264A7', logoUrl: 'https://cdn.simpleicons.org/microsoftteams/6264A7' },
  { tag: 'googlemeet', name: 'Google Meet', category: 'Comunicación', color: '#00897B', logoUrl: 'https://cdn.simpleicons.org/googlemeet/00897B' },
];

// Agregar filtros automáticamente basados en categoría
platformsDB.forEach(platform => {
  platform.filters = [platform.category];
  if ([
    'facebook', 'instagram', 'twitter', 'x', 'tiktok', 'youtube', 'twitch', 'netflix', 'spotify', 'discord',
    'whatsapp', 'messenger', 'wechat', 'line', 'snapchat', 'reddit', 'tinder', 'quora', 'flickr',
    'steam', 'playstation', 'xbox', 'nintendo', 'epicgames', 'riotgames', 'roblox', 'minecraft', 'fortnite',
    'valorant', 'leagueoflegends', 'dota2', 'pubg', 'apexlegends', 'callofduty', 'counterstrike'
  ].includes(platform.tag)) {
    platform.filters.push('top');
  }
});
