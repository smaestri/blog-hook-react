import { createRoot } from 'react-dom/client'

// Change HERE the case you want
// import Parent from './useCallback/Parent.tsx'
//import Parent from './useMemo/Parent.tsx'
import Parent from './memo/Parent.tsx'

createRoot(document.getElementById('root')!).render(
    <Parent />
)
