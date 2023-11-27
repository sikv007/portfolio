import Image from 'next/image';

import image from '../public/sigurd.png';

export function Avatar() {
  return (
    <div className='relative h-[10rem] w-[10rem] rounded-full overflow-hidden'>
      <Image className='object-cover w-full h-full' src={image} alt='Sigurd Illguth Kvamme' width={500} height={500} />
    </div>
  );
}
