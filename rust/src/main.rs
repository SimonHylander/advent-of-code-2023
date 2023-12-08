use std::collections::HashMap;
use std::fs;
use std::str::FromStr;

#[derive(Debug)]
struct MapElement {
    src: usize,
    dst: usize,
    range: usize,
}

#[derive(Debug)]
struct Node {
    src: String,
    dst: String,
    elements: Vec<MapElement>,
}

fn range(line: &str) -> MapElement {
    let mut iter = line.split_whitespace().map(usize::from_str).filter_map(Result::ok);
    let dst = iter.next().unwrap();
    let src = iter.next().unwrap();
    let range = iter.next().unwrap();
    MapElement { src, dst, range }
}

fn parse(line: &str) -> Node {
    let mut filtered = line.lines().filter(|n| !n.is_empty());
    let mut parts = filtered.next().unwrap().split_whitespace();
    let src_dst = parts.next().unwrap().split('-').collect::<Vec<_>>();
    let src = src_dst[0].to_string();
    let dst = src_dst[1].to_string();
    let elements = filtered.map(|l| range(l)).collect();
    Node { src, dst, elements }
}


fn find_node(seed_number: usize, name: &str, map: &HashMap<String, Node>) -> usize {
    match map.get(name) {
        Some(item) => {
            if let Some(range_line) = item
                .elements
                .iter()
                .find(|n| n.src <= seed_number && seed_number <= n.src + n.range)
            {
                let index = seed_number - range_line.src;
                let next = range_line.dst + index;
                find_node(next, &item.dst, map)
            } else {
                find_node(seed_number, &item.dst, map)
            }
        }
        None => seed_number,
    }
}

fn main() {
    let file_path = "/Users/simonhylander/development/advent-of-code/advent-of-code-2023/input/day05.txt";
    
    let input = fs::read_to_string(file_path)
        .expect("Should have been able to read the file");

        let lines: Vec<&str> = input.trim().split("\n\n").collect();

        //: Vec<(usize, usize)>
         let seeds = lines[0].split(": ")
            .nth(1)
            .unwrap_or_default()
            //.collect::<Vec<_>>()[1]
            .split_whitespace()
            .map(usize::from_str)
            // .filter_map(Result::ok)
            .filter_map(|s| usize::from_str(s).ok())
            // .tuples()
            .collect();

            println!("{:?}", seeds)
    
        /*let mut map: HashMap<String, Node> = HashMap::new();
    
        for line in lines[1..].iter() {
            let node = parse(line);
            map.insert(node.src.clone(), node);
        }
    
        let mut tot = 0;
        let mut arr: Vec<usize> = Vec::new();
    
        for (seed, range) in seeds.iter() {
            for i in 0..*range {
                let location = find_node(seed + i, "seed", &map);
                arr.push(location);
            }
            tot += range;
        }
    
        arr.sort();
        println!("{:?}", arr);
        println!("{}", tot); */
}
