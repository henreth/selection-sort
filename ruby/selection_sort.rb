def selection_sort(arr)
  newArr = []

  while arr.length != 0
    min = arr.min  
    idx = arr.find_index(min)

    newArr.push(min)
    arr.delete_at(idx)
  end
  newArr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# Please add your pseudocode to this file
# And a written explanation of your solution
