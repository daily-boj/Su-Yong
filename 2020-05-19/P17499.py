def runCommand(type, array, arg1, arg2 = 0):
    if type == 1:
        array[arg1 - 1] = arg2

        return array
    elif 2:
      result = [0] * length
      
      for i in range(0, length):
          result[(arg1 + i) % length] = array[i]

      return result
    else:
      result = [0] * length
      
      for i in range(0, length):
          result[(length - arg1 + i) % length] = array[i]

      return result

length, count = list(map(int, input().split()))
array = list(map(int, input().split()))

for i in range(0, count):
    arr = list(map(int, input().split()))
    
    if arr[0] == 1:
        array = runCommand(arr[0], array, arr[1], arr[2])
    else:
        array = runCommand(arr[0], array, arr[1])

print(array)