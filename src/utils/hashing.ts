export const passwordToHash = async (password: string) => {
	const arrayBuffer = new TextEncoder().encode(password)
	const hashAsArrayBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer)
	const uint8ViewOfHash = new Uint8Array(hashAsArrayBuffer)
	return Array.from(uint8ViewOfHash)
		.map(b => b.toString(16).padStart(2, '0'))
		.join('')
}
