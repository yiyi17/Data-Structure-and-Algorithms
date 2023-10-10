// 二叉树反转

const obj = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }

    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

function reverseData(obj) {

    if(!obj.right && !obj.left ) return obj
    
    let mapRight = obj.right
    let mapLeft = obj.left

    obj.right = mapLeft
    obj.left = mapRight

    if(obj.left) {
        reverseData(obj.left)
    }
    
    if(obj.right) {
        reverseData(obj.right)
    }



}

